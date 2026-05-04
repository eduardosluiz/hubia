import { NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (body.event !== "messages.upsert") return NextResponse.json({ received: true });

    const instanceName = body.instance;
    const messageData = body.data;
    const remoteJid = messageData.key.remoteJid;
    const messageText = messageData.message?.conversation || messageData.message?.extendedTextMessage?.text;

    if (!messageText || !instanceName || remoteJid.includes('@g.us')) return NextResponse.json({ received: true });

    const [tenantId] = instanceName.split('_');
    const cleanInstanceName = instanceName.replace(`${tenantId}_`, '');

    // 1. Buscar Instância e verificar se tem Fila Ativa
    const instance = await prisma.whatsAppInstance.findFirst({
      where: { tenantId, instanceName: cleanInstanceName },
      include: { asMainInQueues: { include: { agents: { include: { instance: true }, orderBy: { order: 'asc' } } } } }
    });

    if (!instance || !instance.aiEnabled) return NextResponse.json({ received: true });

    // 2. Processar Resposta via IA
    const completion = await openai.chat.completions.create({
      model: instance.aiModel || "gpt-4o",
      messages: [
        { role: "system", content: `Diretrizes: ${instance.aiPrompt}\n\nConhecimento: ${instance.knowledgeBase}\n\nREGRA IMPORTANTE: Se o cliente desejar falar com um humano, suporte avançado ou vendedor, termine sua resposta APENAS com a tag #TRANSFERIR.` },
        { role: "user", content: messageText }
      ],
    });

    const aiResponse = completion.choices[0].message.content || "";

    const evolutionUrl = process.env.EVOLUTION_URL;
    const evolutionToken = process.env.EVOLUTION_API_KEY;

    // 3. LÓGICA DE TRANSFERÊNCIA (Handover)
    if (aiResponse.includes("#TRANSFERIR")) {
      const activeQueue = instance.asMainInQueues[0]; // Pega a primeira fila vinculada
      
      if (activeQueue && activeQueue.agents.length > 0) {
        // Calcular Próximo Atendente (Round Robin)
        const nextIndex = (activeQueue.lastAgentIndex + 1) % activeQueue.agents.length;
        const agentRecord = activeQueue.agents[nextIndex];
        const agentInstance = agentRecord.instance;

        // A. Enviar mensagem de despedida pela IA
        await fetch(`${evolutionUrl}/message/sendText/${instanceName}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'apikey': evolutionToken! },
          body: JSON.stringify({
            number: remoteJid.split('@')[0],
            text: `Entendi! Vou te passar para o nosso consultor especializado: *${agentInstance.instanceName}*. Ele já vai te chamar em instantes.`,
          })
        });

        // B. Iniciar chat pelo Atendente Humano
        const agentEvolutionName = `${tenantId}_${agentInstance.instanceName}`;
        await fetch(`${evolutionUrl}/message/sendText/${agentEvolutionName}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'apikey': evolutionToken! },
          body: JSON.stringify({
            number: remoteJid.split('@')[0],
            text: `Olá! Sou o *${agentInstance.instanceName}*. Recebi seu contato do nosso canal principal. Como posso te ajudar hoje?`,
          })
        });

        // C. Atualizar posição da fila no banco
        await prisma.attendanceQueue.update({
          where: { id: activeQueue.id },
          data: { lastAgentIndex: nextIndex }
        });

        console.log(`[Transferência] Lead ${remoteJid} transferido para ${agentInstance.instanceName}`);
        return NextResponse.json({ status: "TRANSFERRED" });
      }
    }

    // 4. Resposta Normal da IA
    if (aiResponse && !aiResponse.includes("#TRANSFERIR")) {
      await fetch(`${evolutionUrl}/message/sendText/${instanceName}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'apikey': evolutionToken! },
        body: JSON.stringify({ number: remoteJid.split('@')[0], text: aiResponse, delay: 1000 })
      });
    }

    return NextResponse.json({ status: "SUCCESS" });
  } catch (error) {
    console.error("[Webhook Error]:", error);
    return NextResponse.json({ error: "Internal Error" }, { status: 500 });
  }
}

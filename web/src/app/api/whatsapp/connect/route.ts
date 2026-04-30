import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../lib/auth";

import { prisma } from "../../../../lib/prisma";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const tenantId = (session?.user as any)?.tenantId;

  if (!session || !tenantId) return NextResponse.json({ error: "Não autorizado" }, { status: 401 });

  const evolutionUrl = process.env.EVOLUTION_URL;
  const evolutionToken = process.env.EVOLUTION_API_KEY;

  if (!evolutionUrl || !evolutionToken) {
    return NextResponse.json({ error: "Configuração global da API ausente" }, { status: 500 });
  }

  try {
    const { instanceName, isAI } = await req.json();
    
    // Buscar nome da empresa
    const tenant = await prisma.tenant.findUnique({ where: { id: tenantId }});
    const companyName = tenant?.name ? tenant.name.replace(/\s+/g, '') : "Empresa";
    
    // Nome com padrão: NOMEEMPRESA_NOMEINSTANCIA
    const internalInstanceName = `${companyName}_${instanceName.replace(/\s+/g, '_')}`;

    console.log("🔗 Tentando conectar à Evolution API:", `${evolutionUrl}/instance/create`);
    
    const createRes = await fetch(`${evolutionUrl}/instance/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'apikey': evolutionToken },
      body: JSON.stringify({
        instanceName: internalInstanceName,
        token: evolutionToken,
        qrcode: true,
        integration: "WHATSAPP-BAILEYS"
      })
    });

    const responseText = await createRes.text();
    let createData;
    try {
      createData = JSON.parse(responseText);
    } catch {
      createData = { error: "Erro de parsing", text: responseText, status: createRes.status };
    }
    console.log("📥 Resposta Criação Evolution:", JSON.stringify(createData, null, 2));

    // Função auxiliar para salvar no banco local
    const saveToLocalDb = async () => {
       await prisma.whatsAppInstance.upsert({
         where: { id: createData?.id || createData?.instance?.instanceId || createData?.instance?.id || createData?.hash || internalInstanceName },
         update: {
           instanceName: instanceName,
           status: 'CONNECTING',
           type: isAI ? 'MAIN_IA' : 'AGENT',
           aiEnabled: !!isAI
         },
         create: {
           id: createData?.id || createData?.instance?.instanceId || createData?.instance?.id || createData?.hash || internalInstanceName,
           instanceName: instanceName,
           tenantId: tenantId,
           status: 'CONNECTING',
           type: isAI ? 'MAIN_IA' : 'AGENT',
           aiEnabled: !!isAI
         }
       }).catch((e: any) => console.error("Erro ao salvar no DB local:", e));
    };

    // Se a criação foi bem sucedida, mas não retornou o QR base64, buscamos explicitamente
    if (createRes.ok && (!createData.qrcode || !createData.qrcode.base64)) {
      console.log("🔍 QR Code não veio na criação. Buscando via /instance/connect...");
      try {
        const qrRes = await fetch(`${evolutionUrl}/instance/connect/${internalInstanceName}`, {
          method: 'GET',
          headers: { 'apikey': evolutionToken }
        });
        const qrText = await qrRes.text();
        let qrData: any = {};
        try { qrData = JSON.parse(qrText); } catch {}
        
        if (createRes.ok || qrData?.instance?.instanceName) {
           await saveToLocalDb();
        }

        if (qrData.base64) {
          return NextResponse.json({ ...createData, qrcode: { base64: qrData.base64 } });
        }
      } catch (e) {
        console.error("❌ Erro ao buscar QR Code após criação:", e);
      }
    } else {
        // Salvar se já retornou sucesso direto
        if (createRes.ok) {
           await saveToLocalDb();
        }
    }

    return NextResponse.json(createData);
  } catch (error: any) {
    console.error("[Create Connect Crash Error]:", error);
    return NextResponse.json({ error: "Falha ao criar conexão", details: error.message || String(error) }, { status: 500 });
  }
}

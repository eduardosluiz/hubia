import { NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';

export async function GET() {
  const now = new Date();
  const evolutionUrl = process.env.EVOLUTION_URL;
  const evolutionToken = process.env.EVOLUTION_API_KEY;

  if (!evolutionUrl || !evolutionToken) {
    return NextResponse.json({ error: "API Nexus não configurada" }, { status: 500 });
  }

  try {
    const pendingExecutions = await prisma.workflowExecution.findMany({
      where: {
        status: { in: ['QUEUED', 'RUNNING'] },
        nextStepAt: { lte: now },
        workflow: { status: 'ACTIVE' }
      },
      include: { 
        workflow: true, 
        lead: { include: { tags: true } } 
      },
      take: 15
    });

    for (const exec of pendingExecutions) {
      const nodes = JSON.parse(exec.workflow.nodes);
      const connections = JSON.parse(exec.workflow.connections);

      // A. Identificar nó atual
      let currentNodeId = exec.currentNode;
      if (!currentNodeId) {
        const triggerNode = nodes.find((n: any) => ['TRIGGER', 'AUDIENCE', 'TAG'].includes(n.type));
        currentNodeId = triggerNode?.id;
      }

      const currentNode = nodes.find((n: any) => n.id === currentNodeId);
      let branch: 'true' | 'false' | undefined = undefined;

      // B. LÓGICA DE DECISÃO (CONDIÇÃO)
      if (currentNode?.type === 'CONDITION') {
        const criteria = currentNode.config?.condition;
        
        if (criteria === 'HAS_TAG') {
          const targetTag = currentNode.config?.tag;
          const hasTag = exec.lead.tags.some(t => t.name === targetTag);
          branch = hasTag ? 'true' : 'false';
        } else {
          // Para visualização/clique, como ainda não temos o rastreador, 
          // assumimos o caminho de sucesso (Sim)
          branch = 'true';
        }
      }

      // C. Encontrar próxima conexão baseada no ramo (branch)
      const connection = connections.find((c: any) => 
        c.fromId === currentNodeId && (branch ? c.branch === branch : true)
      );
      
      if (!connection) {
        await prisma.workflowExecution.update({
          where: { id: exec.id },
          data: { status: 'COMPLETED', currentNode: 'END' }
        });
        continue;
      }

      const nextNode = nodes.find((n: any) => n.id === connection.toId);
      if (!nextNode) continue;

      // D. EXECUTAR AÇÃO DO PRÓXIMO NÓ
      let delaySeconds = 0;

      try {
        switch (nextNode.type) {
          case 'WHATSAPP':
            // 1. Safety Buffer (Humano Artificial): 
            // Adiciona um pequeno atraso aleatório de 5 a 15 segundos NO TOPO de qualquer delay existente
            const safetyBuffer = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
            
            const instanceName = `${exec.lead.tenantId}_${nextNode.config?.instance || 'principal'}`;
            await fetch(`${evolutionUrl}/message/sendText/${instanceName}`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', 'apikey': evolutionToken },
              body: JSON.stringify({
                number: exec.lead.phone,
                text: nextNode.content || "Mensagem Nexus",
                delay: safetyBuffer * 1000 // Evolution API também aplica esse delay interno
              })
            });
            break;
          
          case 'DELAY':
            const min = parseInt(nextNode.config?.delayMin || nextNode.config?.delayValue || "30");
            const max = parseInt(nextNode.config?.delayMax || nextNode.config?.delayValue || "60");
            const unit = nextNode.config?.delayUnit || "s";
            
            // Sorteio Aleatório entre Min e Max
            const randomVal = Math.floor(Math.random() * (max - min + 1)) + min;
            
            delaySeconds = unit === 'm' ? randomVal * 60 : unit === 'h' ? randomVal * 3600 : randomVal;
            break;

          case 'ADD_TAG':
            if (nextNode.config?.tag) {
              await prisma.lead.update({
                where: { id: exec.lead.id },
                data: { tags: { connect: { name_tenantId: { name: nextNode.config.tag, tenantId: exec.lead.tenantId } } } }
              });
            }
            break;
          
          case 'ROUTING':
            // Lógica de Transferência para Atendente já implementada no Webhook
            // Aqui poderíamos disparar uma notificação interna
            break;
        }

        // E. Atualizar Estado
        const nextExecutionDate = new Date(now.getTime() + (delaySeconds * 1000));
        await prisma.workflowExecution.update({
          where: { id: exec.id },
          data: {
            currentNode: nextNode.id,
            nextStepAt: nextExecutionDate,
            status: (delaySeconds > 0 || nextNode.type === 'CONDITION') ? 'QUEUED' : 'RUNNING'
          }
        });

      } catch (err) {
        await prisma.workflowExecution.update({
          where: { id: exec.id },
          data: { status: 'FAILED' }
        });
      }
    }

    return NextResponse.json({ processed: pendingExecutions.length });
  } catch (error) {
    return NextResponse.json({ error: "Engine Fail" }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import { NexusEngine } from '../../../../lib/engine';

export async function POST(req: Request) {
  try {
    const { workflowId, audienceId } = await req.json();

    // Busca leads do público selecionado
    const leads = await prisma.lead.findMany({
      where: {
        audiences: {
          some: { id: audienceId }
        }
      }
    });

    console.log(`[Trigger] Iniciando Workflow ${workflowId} para ${leads.length} leads.`);

    // Cria as execuções em massa
    for (const lead of leads) {
      await NexusEngine.triggerWorkflow(workflowId, lead.id);
    }

    return NextResponse.json({ success: true, count: leads.length });
  } catch (error) {
    console.error('[Trigger Error]:', error);
    return NextResponse.json({ error: 'Falha ao iniciar automação' }, { status: 500 });
  }
}

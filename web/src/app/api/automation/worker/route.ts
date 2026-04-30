import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import { NexusEngine } from '../../../../lib/engine';

export async function GET() {
  try {
    // Busca execuções que estão em DELAY e que o tempo de espera já acabou
    const delayedExecutions = await prisma.workflowExecution.findMany({
      where: {
        status: 'DELAYED',
        nextStepAt: {
          lte: new Date()
        }
      }
    });

    console.log(`[Worker] Processando ${delayedExecutions.length} execuções agendadas...`);

    for (const exec of delayedExecutions) {
      // Coloca em RUNNING para o motor assumir
      await prisma.workflowExecution.update({
        where: { id: exec.id },
        data: { status: 'RUNNING' }
      });

      // Faz o motor avançar para o próximo nó após o Delay
      await NexusEngine.stepForward(exec.workflowId, exec.leadId);
    }

    return NextResponse.json({ processed: delayedExecutions.length });
  } catch (error) {
    console.error('[Worker Error]:', error);
    return NextResponse.json({ error: 'Falha no worker' }, { status: 500 });
  }
}

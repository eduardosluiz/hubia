import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await getServerSession(authOptions);
  const tenantId = (session?.user as any)?.tenantId;

  if (!session || !tenantId) return NextResponse.json({ error: "Não autorizado" }, { status: 401 });

  try {
    // 1. Contagem Total
    const totalLeads = await prisma.lead.count({ where: { tenantId } });

    // 2. Agrupamento por Origem (Gráfico)
    const leadsBySource = await prisma.lead.groupBy({
      by: ['source'],
      where: { tenantId },
      _count: true
    });

    // 3. Status das Automações
    const activeWorkflows = await prisma.workflow.count({
      where: { tenantId, status: 'ACTIVE' }
    });

    // 4. Métricas de Execução
    const executions = await prisma.workflowExecution.groupBy({
      by: ['status'],
      where: { workflow: { tenantId } },
      _count: true
    });

    // 5. Instâncias Conectadas
    const connectedInstances = await prisma.whatsappInstance.count({
      where: { tenantId, status: 'CONNECTED' }
    });

    return NextResponse.json({
      leads: {
        total: totalLeads,
        bySource: leadsBySource
      },
      automations: {
        active: activeWorkflows,
        executions: executions
      },
      whatsapp: {
        connected: connectedInstances
      }
    });
  } catch (error) {
    return NextResponse.json({ error: "Fail" }, { status: 500 });
  }
}

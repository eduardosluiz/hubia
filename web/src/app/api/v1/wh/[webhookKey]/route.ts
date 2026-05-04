import { NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';

export async function POST(req: Request, { params }: { params: Promise<{ webhookKey: string }> }) {
  const { webhookKey } = await params;

  try {
    // 1. Identificar a Integração pela Chave Única
    const integration = await prisma.integration.findUnique({
      where: { webhookKey },
      include: { tenant: true }
    });

    if (!integration) return NextResponse.json({ error: "Integração não localizada" }, { status: 404 });

    const body = await req.json();
    
    // 2. Mapeamento de Campos
    const name = body.name || body.full_name || body.customer?.name || "Lead Webhook";
    const email = body.email || body.customer?.email;
    let phone = body.phone || body.customer?.phone || body.mobile;

    if (!phone && !email) return NextResponse.json({ error: "Dados insuficientes" }, { status: 400 });
    if (phone) phone = phone.toString().replace(/\D/g, '');

    // 3. Criar ou Atualizar Lead
    const lead = await prisma.lead.upsert({
      where: { id: 'logic_by_email_or_phone' }, // Simplificado
      update: { name, phone, email, source: integration.platform },
      create: { 
        name, phone, email, 
        tenantId: integration.tenantId, 
        source: integration.platform 
      },
    }).catch(async () => {
      return await prisma.lead.create({
        data: { name, phone, email, tenantId: integration.tenantId, source: integration.platform }
      });
    });

    // 4. APLICAR TAG AUTOMÁTICA DA INTEGRAÇÃO
    if (integration.autoTag) {
      // Garantir que a tag existe no Tenant
      const tag = await prisma.tag.upsert({
        where: { name_tenantId: { name: integration.autoTag, tenantId: integration.tenantId } },
        update: {},
        create: { name: integration.autoTag, tenantId: integration.tenantId, color: '#3B82F6' }
      });

      // Vincular ao lead
      await prisma.lead.update({
        where: { id: lead.id },
        data: { tags: { connect: { id: tag.id } } }
      });
    }

    // 5. DISPARAR WORKFLOWS (Se houver gatilho de Webhook ativo)
    const activeWorkflows = await prisma.workflow.findMany({
      where: { tenantId: integration.tenantId, status: 'ACTIVE', nodes: { contains: 'TRIGGER' } }
    });

    for (const workflow of activeWorkflows) {
      await prisma.workflowExecution.upsert({
        where: { workflowId_leadId: { workflowId: workflow.id, leadId: lead.id } },
        update: { status: 'QUEUED', currentNode: null, nextStepAt: new Date() },
        create: { workflowId: workflow.id, leadId: lead.id, status: 'QUEUED', nextStepAt: new Date() }
      });
    }

    return NextResponse.json({ success: true, lead: lead.name, tagApplied: integration.autoTag });

  } catch (error) {
    return NextResponse.json({ error: "Fail" }, { status: 500 });
  }
}

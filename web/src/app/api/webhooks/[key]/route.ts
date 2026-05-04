import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request, { params }: { params: { key: string } }) {
  try {
    const { key } = params;
    const body = await req.json();

    // 1. Localiza a integração pela chave do Webhook
    const integration = await prisma.integration.findUnique({
      where: { webhookKey: key },
      include: { tenant: true }
    });

    if (!integration) {
      return NextResponse.json({ error: 'Integração não encontrada' }, { status: 404 });
    }

    // 2. Extrai dados do Lead conforme a plataforma
    let leadData = {
      name: 'Lead Webhook',
      email: '',
      phone: '',
      source: integration.platform
    };

    if (integration.platform === 'KIWIFY') {
      leadData.name = body.customer?.name || leadData.name;
      leadData.email = body.customer?.email || '';
      leadData.phone = body.customer?.mobile || '';
    } else if (integration.platform === 'HOTMART') {
      leadData.name = body.data?.buyer?.name || leadData.name;
      leadData.email = body.data?.buyer?.email || '';
      leadData.phone = body.data?.buyer?.checkout_phone || '';
    } else {
      // Formato genérico/site
      leadData.name = body.name || body.first_name || leadData.name;
      leadData.email = body.email || '';
      leadData.phone = body.phone || body.tel || body.whatsapp || '';
    }

    // Normalização básica de telefone (remove caracteres especiais)
    leadData.phone = leadData.phone.replace(/\D/g, '');

    if (!leadData.phone) {
      return NextResponse.json({ error: 'Telefone não fornecido' }, { status: 400 });
    }

    // 3. Upsert do Lead no CRM
    const lead = await prisma.lead.upsert({
      where: { 
        // Aqui assumimos que no futuro poderemos ter um índice único [phone, tenantId]
        // Por enquanto buscamos e atualizamos/criamos
        id: (await prisma.lead.findFirst({ where: { phone: leadData.phone, tenantId: integration.tenantId } }))?.id || 'new-lead'
      },
      update: {
        name: leadData.name,
        email: leadData.email,
        status: 'ACTIVE'
      },
      create: {
        name: leadData.name,
        email: leadData.email,
        phone: leadData.phone,
        source: leadData.source,
        tenantId: integration.tenantId,
        status: 'ACTIVE'
      }
    });

    // 4. Aplica Auto-Tag se configurado
    if (integration.autoTag) {
      const tag = await prisma.tag.findFirst({
        where: { name: integration.autoTag, tenantId: integration.tenantId }
      });
      if (tag) {
        await prisma.lead.update({
          where: { id: lead.id },
          data: { tags: { connect: { id: tag.id } } }
        });
      }
    }

    return NextResponse.json({ success: true, leadId: lead.id });
  } catch (error) {
    console.error('Webhook processing error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

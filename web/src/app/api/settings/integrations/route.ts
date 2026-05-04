import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await getServerSession(authOptions);
  let tenantId = (session?.user as any)?.tenantId;

  // Fallback para desenvolvimento
  if (!tenantId) {
    const fallbackTenant = await prisma.tenant.findFirst();
    tenantId = fallbackTenant?.id;
  }

  if (!tenantId) {
    return NextResponse.json({ error: "Tenant não encontrado" }, { status: 404 });
  }

  try {
    const integrations = await prisma.integration.findMany({
      where: { tenantId },
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(integrations);
  } catch (error) {
    return NextResponse.json({ error: "Falha ao buscar integrações" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  let tenantId = (session?.user as any)?.tenantId;

  if (!tenantId) {
    const fallbackTenant = await prisma.tenant.findFirst();
    tenantId = fallbackTenant?.id;
  }

  if (!tenantId) {
    return NextResponse.json({ error: "Tenant não encontrado" }, { status: 404 });
  }

  try {
    const { name, platform } = await req.json();
    
    const integration = await prisma.integration.create({
      data: {
        name,
        platform,
        tenantId,
        type: 'WEBHOOK',
        // O webhookKey é gerado automaticamente pelo @default(cuid()) no Prisma
      }
    });
    
    return NextResponse.json(integration);
  } catch (error) {
    console.error("Erro ao criar integração:", error);
    return NextResponse.json({ error: "Falha ao criar integração" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await getServerSession(authOptions);
  const tenantId = (session?.user as any)?.tenantId;
  if (!session || !tenantId) return NextResponse.json({ error: "Não autorizado" }, { status: 401 });

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
  const tenantId = (session?.user as any)?.tenantId;
  if (!session || !tenantId) return NextResponse.json({ error: "Não autorizado" }, { status: 401 });

  try {
    const { name, platform, autoTag } = await req.json();

    const integration = await prisma.integration.create({
      data: {
        name,
        platform,
        autoTag,
        tenantId
      }
    });

    return NextResponse.json(integration);
  } catch (error) {
    return NextResponse.json({ error: "Falha ao criar integração" }, { status: 500 });
  }
}

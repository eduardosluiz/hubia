import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session || !(session.user as any).tenantId) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  try {
    const audiences = await prisma.audience.findMany({
      where: { tenantId: (session.user as any).tenantId },
      orderBy: { name: 'asc' }
    });
    return NextResponse.json(audiences);
  } catch (error) {
    return NextResponse.json({ error: "Falha ao buscar públicos" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const tenantId = (session?.user as any)?.tenantId;

  if (!session || !tenantId) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  try {
    const { name } = await req.json();

    if (!name) {
      return NextResponse.json({ error: "O nome é obrigatório" }, { status: 400 });
    }

    // Verificar se já existe
    const exists = await prisma.audience.findFirst({
      where: { name, tenantId }
    });

    if (exists) {
      return NextResponse.json({ error: "Este público já existe" }, { status: 400 });
    }

    const audience = await prisma.audience.create({
      data: {
        name,
        tenantId
      }
    });
    return NextResponse.json(audience);
  } catch (error) {
    console.error("Erro na API de Audience:", error);
    return NextResponse.json({ error: "Falha interna ao criar público" }, { status: 500 });
  }
}

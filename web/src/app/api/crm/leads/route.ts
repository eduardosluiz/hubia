import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../lib/auth";
import { prisma } from "../../../../lib/prisma";

// GET: Busca todos os leads do Tenant logado
export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || !(session.user as any).tenantId) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  try {
    const leads = await prisma.lead.findMany({
      where: {
        tenantId: (session.user as any).tenantId,
      },
      include: {
        tags: true,
        audiences: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(leads);
  } catch (error) {
    return NextResponse.json({ error: "Falha ao buscar leads" }, { status: 500 });
  }
}

// POST: Cria um novo lead vinculado ao Tenant
export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !(session.user as any).tenantId) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { name, phone, email, status, obs, tags, audiences } = body;

    const lead = await prisma.lead.create({
      data: {
        name,
        phone,
        email,
        status: status || "ACTIVE",
        obs,
        tenantId: (session.user as any).tenantId,
        tags: {
          connect: tags?.map((tagId: string) => ({ id: tagId })) || [],
        },
        audiences: {
          connect: audiences?.map((audId: string) => ({ id: audId })) || [],
        },
      },
    });

    return NextResponse.json(lead);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Falha ao criar lead" }, { status: 500 });
  }
}

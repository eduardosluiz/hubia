import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../lib/auth";
import { prisma } from "../../../../lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);
  let tenantId = (session?.user as any)?.tenantId;

  if (!tenantId) {
    const fallbackTenant = await prisma.tenant.findFirst();
    tenantId = fallbackTenant?.id;
  }

  if (!tenantId) return NextResponse.json([], { status: 200 });

  try {
    const queues = await prisma.attendanceQueue.findMany({
      where: { tenantId },
      include: { mainInstance: true, agents: { include: { instance: true } } },
      orderBy: { name: 'asc' }
    });
    return NextResponse.json(queues);
  } catch (error) {
    return NextResponse.json({ error: "Falha ao buscar filas" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  let tenantId = (session?.user as any)?.tenantId;

  if (!tenantId) {
    const fallbackTenant = await prisma.tenant.findFirst();
    tenantId = fallbackTenant?.id;
  }

  try {
    const { name, mainInstanceId, agentIds } = await req.json();
    
    const queue = await prisma.attendanceQueue.create({
      data: {
        name,
        mainInstanceId,
        tenantId,
        agents: {
          create: agentIds.map((id: string, index: number) => ({
            instanceId: id,
            order: index + 1
          }))
        }
      }
    });
    
    return NextResponse.json(queue);
  } catch (error) {
    console.error("Erro ao criar fila:", error);
    return NextResponse.json({ error: "Falha ao criar fila" }, { status: 500 });
  }
}

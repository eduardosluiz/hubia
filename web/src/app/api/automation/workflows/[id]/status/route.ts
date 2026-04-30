import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../../lib/auth";
import { prisma } from "../../../../../lib/prisma";

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Não autorizado" }, { status: 401 });

  try {
    const { status } = await req.json();
    const workflow = await prisma.workflow.update({
      where: { id: params.id },
      data: { status }
    });
    return NextResponse.json(workflow);
  } catch (error) {
    return NextResponse.json({ error: "Falha ao atualizar status" }, { status: 500 });
  }
}

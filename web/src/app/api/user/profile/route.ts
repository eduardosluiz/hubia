import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function PATCH(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { name } = body;

    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: { name },
    });

    return NextResponse.json({ 
      message: "Perfil atualizado com sucesso",
      user: { name: updatedUser.name }
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Falha ao atualizar perfil" }, { status: 500 });
  }
}

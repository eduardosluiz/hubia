import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../../lib/auth";
import { prisma } from "../../../../../lib/prisma";
import bcrypt from "bcrypt";

export async function PATCH(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) return NextResponse.json({ error: "Não autorizado" }, { status: 401 });

  try {
    const { currentPassword, newPassword } = await req.json();

    // 1. Buscar usuário
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 });

    // 2. Validar senha atual
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) return NextResponse.json({ error: "Senha atual incorreta" }, { status: 400 });

    // 3. Criptografar e salvar nova senha
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({
      where: { email: session.user.email },
      data: { password: hashedPassword }
    });

    return NextResponse.json({ message: "Senha alterada com sucesso" });
  } catch (error) {
    return NextResponse.json({ error: "Erro interno ao alterar senha" }, { status: 500 });
  }
}

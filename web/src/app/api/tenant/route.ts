import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../lib/auth";
import { prisma } from "../../../lib/prisma";

export async function PATCH(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !(session.user as any).tenantId) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  try {
    const { name } = await req.json();
    const updatedTenant = await prisma.tenant.update({
      where: { id: (session.user as any).tenantId },
      data: { name },
    });

    return NextResponse.json({ 
      message: "Empresa atualizada com sucesso",
      tenant: updatedTenant 
    });
  } catch (error) {
    return NextResponse.json({ error: "Falha ao atualizar empresa" }, { status: 500 });
  }
}

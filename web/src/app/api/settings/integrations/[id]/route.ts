import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  let tenantId = (session?.user as any)?.tenantId;

  if (!tenantId) {
    const fallbackTenant = await prisma.tenant.findFirst();
    tenantId = fallbackTenant?.id;
  }

  try {
    await prisma.integration.delete({
      where: { id: params.id, tenantId }
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Falha ao excluir integração" }, { status: 500 });
  }
}

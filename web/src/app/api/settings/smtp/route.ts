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
    const accounts = await prisma.smtpAccount.findMany({
      where: { tenantId },
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(accounts);
  } catch (error) {
    return NextResponse.json({ error: "Falha ao buscar contas SMTP" }, { status: 500 });
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
    const body = await req.json();
    const account = await prisma.smtpAccount.create({
      data: {
        ...body,
        tenantId
      }
    });
    return NextResponse.json(account);
  } catch (error) {
    return NextResponse.json({ error: "Falha ao criar conta SMTP" }, { status: 500 });
  }
}

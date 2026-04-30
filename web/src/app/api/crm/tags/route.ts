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

  if (!tenantId) {
    return NextResponse.json({ error: "Tenant não encontrado" }, { status: 404 });
  }

  try {
    const tags = await prisma.tag.findMany({
      where: { tenantId },
      orderBy: { name: 'asc' }
    });
    return NextResponse.json(tags);
  } catch (error) {
    return NextResponse.json({ error: "Falha ao buscar tags" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  let tenantId = (session?.user as any)?.tenantId;

  if (!tenantId) {
    const fallbackTenant = await prisma.tenant.findFirst();
    tenantId = fallbackTenant?.id;
  }

  if (!tenantId) {
    return NextResponse.json({ error: "Tenant não encontrado" }, { status: 404 });
  }

  try {
    const { name, color } = await req.json();
    const tag = await prisma.tag.create({
      data: {
        name,
        color,
        tenantId
      }
    });
    return NextResponse.json(tag);
  } catch (error) {
    return NextResponse.json({ error: "Falha ao criar tag" }, { status: 500 });
  }
}

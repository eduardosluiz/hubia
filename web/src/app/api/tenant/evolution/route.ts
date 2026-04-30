import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../lib/auth";
import { prisma } from "../../../../lib/prisma";

export async function PATCH(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !(session.user as any).tenantId) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  try {
    const { evolutionUrl, evolutionToken } = await req.json();
    
    const updatedTenant = await prisma.tenant.update({
      where: { id: (session.user as any).tenantId },
      data: { 
        evolutionUrl, 
        evolutionToken 
      },
    });

    return NextResponse.json({ 
      message: "Configurações de API salvas",
      tenant: {
        evolutionUrl: updatedTenant.evolutionUrl,
        // Não retornamos o token completo por segurança
        evolutionToken: updatedTenant.evolutionToken ? "••••••••" : null
      }
    });
  } catch (error) {
    return NextResponse.json({ error: "Falha ao salvar chaves de API" }, { status: 500 });
  }
}

// GET: Para carregar as configurações atuais
export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || !(session.user as any).tenantId) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  try {
    const tenant = await prisma.tenant.findUnique({
      where: { id: (session.user as any).tenantId },
      select: { evolutionUrl: true, evolutionToken: true }
    });

    return NextResponse.json(tenant);
  } catch (error) {
    return NextResponse.json({ error: "Falha ao buscar configurações" }, { status: 500 });
  }
}

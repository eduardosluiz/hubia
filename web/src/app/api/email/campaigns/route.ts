import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// No App Router, o limite de tamanho de corpo é configurado no middleware ou no próprio processamento.
// Vou garantir que a rota trate o erro de forma clara.

export async function GET() {
  const session = await getServerSession(authOptions);
  let tenantId = (session?.user as any)?.tenantId;

  if (!tenantId) {
    const fallbackTenant = await prisma.tenant.findFirst();
    tenantId = fallbackTenant?.id;
  }

  if (!tenantId) return NextResponse.json([], { status: 200 });

  try {
    const campaigns = await prisma.campaign.findMany({
      where: { tenantId },
      orderBy: { updatedAt: 'desc' }
    });
    return NextResponse.json(campaigns);
  } catch (error) {
    return NextResponse.json({ error: "Falha ao buscar campanhas" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  let tenantId = "unknown";
  try {
    const session = await getServerSession(authOptions);
    tenantId = (session?.user as any)?.tenantId;

    if (!tenantId) {
      console.warn("API_CAMPAIGNS: Sessão sem tenantId, tentando fallback...");
      const fallbackTenant = await prisma.tenant.findFirst();
      tenantId = fallbackTenant?.id;
    }

    if (!tenantId) {
      console.error("API_CAMPAIGNS: Nenhum Tenant encontrado no sistema.");
      return NextResponse.json({ error: "O sistema não possui nenhuma empresa (Tenant) cadastrada. Por favor, execute o seed do banco." }, { status: 400 });
    }

    // Verificar se o tenant realmente existe para evitar P2003
    const exists = await prisma.tenant.findUnique({ where: { id: tenantId } });
    if (!exists) {
      console.error(`API_CAMPAIGNS: TenantId '${tenantId}' referenciado na sessão não existe no banco.`);
      // Tenta um último recurso: usar o primeiro tenant que existir
      const realTenant = await prisma.tenant.findFirst();
      if (realTenant) {
        tenantId = realTenant.id;
        console.log(`API_CAMPAIGNS: Usando fallback realTenant.id: ${tenantId}`);
      } else {
        return NextResponse.json({ error: "Seu ID de empresa é inválido e não há outras empresas no sistema." }, { status: 400 });
      }
    }

    const body = await req.json();
    const { name, subject, content, status } = body;

    if (!name || !subject || !content) {
      return NextResponse.json({ error: "Dados incompletos: nome, assunto e conteúdo são obrigatórios." }, { status: 400 });
    }

    console.log(`API_CAMPAIGNS: Tentando criar campanha para Tenant ${tenantId}...`);

    const campaign = await prisma.campaign.create({
      data: {
        name,
        subject,
        content,
        status: status || 'DRAFT',
        tenantId
      }
    });
    
    console.log(`API_CAMPAIGNS: Campanha ${campaign.id} criada com sucesso.`);
    return NextResponse.json(campaign);
  } catch (error: any) {
    console.error("ERRO_FATAL_API_CAMPAIGNS:", error);
    
    if (error.code === 'P2003') {
      return NextResponse.json({ 
        error: "Erro de Vínculo de Empresa", 
        details: `O ID da empresa '${tenantId}' não é mais válido no banco de dados. Tente sair e entrar novamente.` 
      }, { status: 500 });
    }

    return NextResponse.json({ 
      error: "Falha Interna no Servidor", 
      details: error.message 
    }, { status: 500 });
  }
}

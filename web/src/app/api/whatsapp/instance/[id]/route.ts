import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await getServerSession(authOptions);
  const tenantId = (session?.user as any)?.tenantId;

  if (!session || !tenantId) return NextResponse.json({ error: "Não autorizado" }, { status: 401 });

  const evolutionUrl = process.env.EVOLUTION_URL;
  const evolutionToken = process.env.EVOLUTION_API_KEY;

  if (!evolutionUrl || !evolutionToken) {
    return NextResponse.json({ error: "Configuração global ausente" }, { status: 500 });
  }

  try {
    // Buscar a instância no banco de dados para confirmar a propriedade
    const instance = await prisma.whatsAppInstance.findUnique({
      where: { id: id }
    });

    if (instance && instance.tenantId !== tenantId) {
      return NextResponse.json({ error: "Acesso negado." }, { status: 403 });
    }

    // Como extraímos o prefixo da empresa, precisamos reconstruir o nome para deletar na Evolution
    const tenant = await prisma.tenant.findUnique({ where: { id: tenantId }});
    const companyName = tenant?.name ? tenant.name.replace(/\s+/g, '') : "Empresa";
    
    // Obter o nome limpo que veio do body, caso ele preencha pelo front
    const body = await req.json().catch(() => ({}));
    const cleanName = body.name || (instance ? instance.instanceName : "");
    const internalEvolutionName = `${companyName}_${cleanName.replace(/\s+/g, '_')}`;

    console.log("🗑️ Apagando Instância da Evolution API:", internalEvolutionName);
    
    // Deletar da Evolution
    if (cleanName) {
      await fetch(`${evolutionUrl}/instance/delete/${internalEvolutionName}`, {
        method: 'DELETE',
        headers: { 'apikey': evolutionToken }
      }).catch(e => console.error("Erro Evolution:", e));
    }

    // Deletar primeiro as filas onde esta instância é a IA principal (evita erro P2003 de restrição de chave estrangeira)
    await prisma.attendanceQueue.deleteMany({
      where: { mainInstanceId: id }
    });

    // Deletar também os vínculos desta instância como atendente em qualquer fila
    await prisma.queueAgent.deleteMany({
      where: { instanceId: id }
    });

    // Deletar do banco de dados local
    if (instance) {
      await prisma.whatsAppInstance.delete({
        where: { id: id }
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[DELETE Instance Error]:", error);
    return NextResponse.json({ error: "Erro interno ao deletar instância" }, { status: 500 });
  }
}

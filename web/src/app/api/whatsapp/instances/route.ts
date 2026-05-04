import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await getServerSession(authOptions);
  const tenantId = (session?.user as any)?.tenantId;

  if (!session || !tenantId) return NextResponse.json({ error: "Não autorizado" }, { status: 401 });

  const evolutionUrl = process.env.EVOLUTION_URL;
  const evolutionToken = process.env.EVOLUTION_API_KEY;

  if (!evolutionUrl || !evolutionToken) {
    return NextResponse.json({ error: "Configuração global da API ausente" }, { status: 500 });
  }

  try {
    const response = await fetch(`${evolutionUrl}/instance/fetchInstances`, {
      method: 'GET',
      headers: { 'apikey': evolutionToken }
    });

    if (!response.ok) return NextResponse.json({ error: "Erro no servidor Evolution" }, { status: 500 });

    const allInstances = await response.json();

    if (!Array.isArray(allInstances)) {
      console.error("Evolution API não retornou um array:", allInstances);
      return NextResponse.json([]);
    }

    // Buscar nome da empresa
    const tenant = await prisma.tenant.findUnique({ where: { id: tenantId }});
    const companyName = tenant?.name ? tenant.name.replace(/\s+/g, '') : "Empresa";

    // Normalizar retorno da Evolution API (V1 vs V2)
    const normalizedInstances = allInstances.map((inst: any) => {
      const flatInst = inst.instance ? { ...inst, ...inst.instance } : inst;
      
      return {
        ...flatInst,
        instanceId: flatInst.id || flatInst.instanceId,
        instanceName: flatInst.name || flatInst.instanceName,
        status: flatInst.connectionStatus || flatInst.status,
        owner: flatInst.number || flatInst.ownerJid || flatInst.owner
      };
    });

    // Buscar instâncias no banco local para cruzar dados (tipo, aiEnabled, etc)
    const localInstances = await prisma.whatsAppInstance.findMany({
      where: { tenantId }
    });

    // Filtro Multi-tenant por prefixo (agora com o companyName)
    const myInstances = normalizedInstances
      .filter((inst: any) => inst && typeof inst.instanceName === 'string' && inst.instanceName.startsWith(`${companyName}_`))
      .map((inst: any) => {
        const cleanName = inst.instanceName.replace(`${companyName}_`, '');
        
        // Encontrar correspondência no banco local
        const local = localInstances.find(l => 
          l.id === inst.instanceId || 
          l.instanceName === cleanName
        );

        return {
          ...inst,
          instanceName: cleanName,
          type: local?.type || (cleanName.toLowerCase().includes('ia') ? 'MAIN_IA' : 'AGENT'),
          aiEnabled: local?.aiEnabled || false
        };
      });

    return NextResponse.json(myInstances);
  } catch (error) {
    return NextResponse.json({ error: "Falha na conexão com o motor de WhatsApp" }, { status: 500 });
  }
}

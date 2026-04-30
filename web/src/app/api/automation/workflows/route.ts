import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET all workflows
export async function GET() {
  try {
    const workflows = await prisma.workflow.findMany({
      orderBy: { updatedAt: 'desc' }
    });
    return NextResponse.json(workflows);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar workflows' }, { status: 500 });
  }
}

// POST new workflow
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, nodes, connections, tenantId } = body;

    // Busca o primeiro tenant se não for fornecido (fallback para dev)
    let finalTenantId = tenantId;
    if (!finalTenantId) {
      const tenant = await prisma.tenant.findFirst();
      if (!tenant) {
        // Cria um tenant padrão se não existir nenhum
        const newTenant = await prisma.tenant.create({ data: { name: 'Default Tenant' } });
        finalTenantId = newTenant.id;
      } else {
        finalTenantId = tenant.id;
      }
    }

    const workflow = await prisma.workflow.create({
      data: {
        name,
        nodes: JSON.stringify(nodes),
        connections: JSON.stringify(connections),
        tenantId: finalTenantId
      }
    });

    return NextResponse.json(workflow);
  } catch (error) {
    console.error('Workflow creation error:', error);
    return NextResponse.json({ error: 'Erro ao criar workflow' }, { status: 500 });
  }
}

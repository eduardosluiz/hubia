const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  console.log('🔄 Iniciando Seed do Hubia Nexus...');

  // 1. Criar Planos
  const starter = await prisma.plan.upsert({
    where: { id: 'plan-starter' },
    update: {},
    create: {
      id: 'plan-starter',
      name: 'Starter',
      price: 97.00,
      maxUsers: 2,
      maxLeads: 500,
      maxWorkflows: 3,
    },
  });

  const pro = await prisma.plan.upsert({
    where: { id: 'plan-pro' },
    update: {},
    create: {
      id: 'plan-pro',
      name: 'Pro',
      price: 297.00,
      maxUsers: 5,
      maxLeads: 5000,
      maxWorkflows: 10,
    },
  });

  const enterprise = await prisma.plan.upsert({
    where: { id: 'plan-enterprise' },
    update: {},
    create: {
      id: 'plan-enterprise',
      name: 'Enterprise',
      price: 997.00,
      maxUsers: 20,
      maxLeads: 50000,
      maxWorkflows: 50,
    },
  });

  console.log('✅ Planos criados com sucesso!');

  // 2. Criar Tenant Admin (Sua Empresa Mestre)
  const masterTenant = await prisma.tenant.upsert({
    where: { slug: 'nexus-hub' },
    update: {},
    create: {
      name: 'Nexus Hub (Admin)',
      slug: 'nexus-hub',
      maxUsers: 999,
      maxLeads: 999999,
      maxWorkflows: 999,
    },
  });

  console.log('✅ Tenant Mestre criado!');

  // 3. Criar Usuário Super-Admin
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const superAdmin = await prisma.user.upsert({
    where: { email: 'admin@hubia.com.br' },
    update: {
      role: 'SUPERADMIN',
    },
    create: {
      email: 'admin@hubia.com.br',
      name: 'Mestre Nexus',
      password: hashedPassword,
      role: 'SUPERADMIN',
      tenantId: masterTenant.id,
    },
  });

  console.log('✅ Super-Admin criado: admin@hubia.com.br / admin123');
  console.log('🚀 Seed Finalizado com Sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

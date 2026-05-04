const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkUsers() {
  try {
    const users = await prisma.user.findMany({
      select: {
        email: true,
        role: true,
        tenantId: true
      }
    });
    console.log('--- Usuários Cadastrados ---');
    console.log(JSON.stringify(users, null, 2));
    
    const tenants = await prisma.tenant.findMany();
    console.log('--- Tenants Cadastrados ---');
    console.log(JSON.stringify(tenants, null, 2));
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkUsers();

const { PrismaClient } = require('@prisma/client');

// O Prisma lê automaticamente o .env, mas vamos forçar a URL aqui para o teste ser isolado
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://postgres.asfdxcjtydwltfndxetc:Supabase248622@aws-1-sa-east-1.pooler.supabase.com:5432/postgres?connect_timeout=5"
    }
  }
});

async function testConnection() {
  console.log("------------------------------------------");
  console.log("Iniciando Teste de Conexão com Prisma...");
  console.log("------------------------------------------");

  try {
    // Tenta uma operação simples de leitura
    await prisma.$connect();
    console.log("✅ SUCESSO: Prisma conectou ao Supabase!");
    
    // Tenta rodar uma query básica
    const result = await prisma.$queryRaw`SELECT 1 as result`;
    console.log("✅ SUCESSO: Query de teste executada!");
    
    console.log("O banco de dados está pronto para receber as migrações.");
  } catch (err) {
    console.error("❌ FALHA NA CONEXÃO PRISMA:");
    console.error(`Código: ${err.code}`);
    console.error(`Mensagem: ${err.message}`);
    
    console.log("------------------------------------------");
    if (err.message.includes("Timed out") || err.code === 'P1001') {
      console.log("DIAGNÓSTICO: A conexão excedeu o tempo limite (Timeout).");
      console.log("ISSO CONFIRMA: Sua rede/firewall está bloqueando a porta 5432.");
    } else if (err.code === 'P1003' || err.message.includes("database does not exist")) {
      console.log("DIAGNÓSTICO: Banco de dados não encontrado.");
    } else if (err.code === 'P1010') {
      console.log("DIAGNÓSTICO: Usuário ou senha incorretos.");
    }
  } finally {
    await prisma.$disconnect();
    process.exit();
  }
}

testConnection();

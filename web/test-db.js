const { Client } = require('pg');

// Extraindo as variáveis do .env manualmente para garantir que estamos testando o que o Prisma vê
const connectionString = "postgresql://postgres.asfdxcjtydwltfndxetc:Supabase248622@aws-1-sa-east-1.pooler.supabase.com:5432/postgres";

const client = new Client({
  connectionString: connectionString,
  connectionTimeoutMillis: 5000, // 5 segundos de timeout
});

console.log("------------------------------------------");
console.log("Iniciando Teste de Conexão com Supabase...");
console.log(`Host: aws-1-sa-east-1.pooler.supabase.com`);
console.log(`Porta: 5432`);
console.log("------------------------------------------");

client.connect()
  .then(() => {
    console.log("✅ SUCESSO: Conexão estabelecida!");
    console.log("O banco de dados está acessível do seu ambiente local.");
    return client.end();
  })
  .catch(err => {
    console.error("❌ FALHA NA CONEXÃO:");
    console.error(`Mensagem: ${err.message}`);
    console.log("------------------------------------------");
    if (err.message.includes("timeout")) {
      console.log("CAUSA PROVÁVEL: Sua rede ou firewall está bloqueando a porta 5432.");
      console.log("AÇÃO: Tente usar uma VPN ou verifique as configurações de saída do seu roteador/firewall.");
    } else if (err.message.includes("password authentication failed")) {
      console.log("CAUSA PROVÁVEL: Senha incorreta.");
      console.log("AÇÃO: Redefina a senha no painel do Supabase e atualize o script/env.");
    } else {
      console.log("CAUSA PROVÁVEL: Erro de host ou configuração de rede.");
    }
  })
  .finally(() => {
    process.exit();
  });

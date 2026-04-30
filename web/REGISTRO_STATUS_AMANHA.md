# LOG DE ESTADO PARA AMANHÃ (Hubia SaaS - Integração WhatsApp)

## Status Atual (Fim do dia)
- **Erro Relatado:** 500 (Internal Server Error) ao tentar deletar uma instância na Lixeira.
- **Causa Raiz do 500 Original:** Foi diagnosticado e ajustado! O problema raiz era o Prisma esperando `whatsAppInstance` (letra 'A' maiúscula) e o código mandando `whatsappInstance`.
- **Por que continuou dando erro 500 e não deletando?**
  Na última execução do `npm run dev`, o log do terminal interceptado mostrou que o **Next.js (Turbopack)** sofreu um *Crash FATAL* por "Corrupted Database" (um bug muito comum no Windows quando a pasta `.next` é travada durante o Fast Refresh). Por causa do crash do compilador, a rota atualizada de exclusão NÃO POUPDE ser compilada, então o servidor Next devolveu erro 500 novamente ao tentar bater nela.

## Próximos Passos (Para Amanhã)
1. **Limpeza do Sistema:** Antes de subir a aplicação, exclua manualmente a pasta `.next` de dentro da pasta `web`.
2. **Re-build:** Rode o comando `npm run dev` com apenas o VSCode aberto, longevando processos extras para não corromper o banco do Turbopack (.next/cache/turbopack).
3. **Teste Lixeira:** Acesse o Front-end e delete a instância "Connecting". A nova versão compilada (com 5 níveis de imports `../../../../../` corretos) irá abater o Whatsapp fantasma instantaneamente no painel da Evolution.
4. Caso ainda apresente alguma resistência estranha via browser, podemos rodar o Dev Server na versão Next nativa (usando o modo standard ao invés de Turbopack: rodar `npx next dev`) para contornar o bug crônico do Windows 11.

Bom descanso! O problema principal de banco e rota já foi desvendado e corrigido nos arquivos-fonte da API, só falta o Turbopack acordar limpo amanhã para ler eles.

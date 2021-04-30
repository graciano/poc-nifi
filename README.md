POC nifi
========

Prova de conceito de uso do nifi para recebimento de arquivo csv a ser processado em microsserviços internos. Este projeto é composto de uma api simples em `express`, um gerador de csv (com 50k usuários usando faker), e uma instância do nifi no docker.

## Como usar

Para usar, após clonar o repositório, é necessário atualizar as dependências com `npm install` e depois inicializar o projeto com `docker-compose up`. O nifi estará disponível em http://localhost:8080/nifi/ e pode-se verificar se a api funciona em http://localhost:3000/.

Após tudo estar no ar, no nifi é necessário importar o template xml `poc_users_template.xml` com a sequência de jobs demonstada. Lembrar também de conferir se os jobs estão em modo "start".

Depois, é só executar `npm run file` que um arquivo csv será gerado. A api escreve um log em `log/acess.log` para verificar que ela está sendo acessada pelo nifi.

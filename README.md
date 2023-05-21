<center>  <h1>Rentx api</h1> </center>

## 💻 Tecnologias Utlizadas

- [TypeScript](https://www.typescriptlang.org/)
- [bcrypt](https://www.npmjs.com/package/bcrypt) - Hash de senhas
- [Express](https://www.npmjs.com/package/express) - Criação da api
- [nodemailer](https://www.npmjs.com/package/nodemailer) - Envio de emails para recuperação de senhas
- [tsyringe](https://www.npmjs.com/package/tsyringe) - Injeção de dependências
- [uuid](https://www.npmjs.com/package/uuid) - Criação de ids no banco de dados
- [supertest](https://www.npmjs.com/package/supertest) - Testes de integração
- [jest](https://www.npmjs.com/package/jest) - Testes unitários
- [swagger](https://www.npmjs.com/package/swagger-ui-express) - Documentação da api
- [typeORM](https://www.npmjs.com/package/typeorm)- Manipular o banco de dados
- [csv-parse](https://www.npmjs.com/package/csv-parse)- Upload de usuários através de planilhas
- [day-js](https://day.js.org/) - para manipulação de datas
- [rate-limiter](https://www.npmjs.com/package/rate-limiter-flexible) - limitação de requisições
- [redis](https://www.npmjs.com/package/redis) - Criação de filas para limitar requisções por ip com rate-limiter
- [multer](https://www.npmjs.com/package/multer) - Manipulação de arquivos
- [handlebars](https://www.npmjs.com/package/handlebars) - Template de emails
- [dotenv](https://www.npmjs.com/package/dotenv) - Manipulação de variaveis ambiente
- [sentry](https://docs.sentry.io/) - Monitorar a aplicação
- [pm2](https://www.npmjs.com/package/pm2) - Manipular a execução da api nos servidor
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Manipular tokens de autenticação
- [aws](https://www.npmjs.com/package/aws-sdk) - Configuração de uploads na amazon s3

## Projeto

Api para aluguel de carros desenvolvida durante as aulas do ignite da rocketseat

# 🚀 Iniciar o projeto

Clone o projeto e acesse a pasta

```bash
$ git clone https://github.com/rocketseat-education/ignite-nodejs-rentx
```

```bash
# Instalar as dependências
$ yarn install
ou
$ npm install
```

```bash
$ yarn dev
ou
$ npm run dev
```

```bash
# Inicie o banco postgres com docker
$ docker-compose up -d database
```

<strong>O app estará disponível no seu browser pelo endereço http://localhost:3333.</strong>
<br />

## 📄 Documentação

<strong>A documentação estará disponível disponível pelo endereço http://localhost:3333/api-docs.</strong>
<br />

## 🧪 Testes

Para rodar os tests da aplicação use o seguinte comando:

```bash
$ yarn test
ou
$ npm run test
```

<strong>O relatórios detalhados de coverage estarão no diretório coverage na raiz do projeto e poderão ser vistos através de do arquivo index.html</strong>

⚠️ É necessário ter o docker e o docker compose instalado na sua máquina, é necessários preencher as variavéis no arquivo .env seguindo o .env.example, dados da aws e email para recuperação de senha ⚠️

## DTO

Data transfer object
para que as rotas não tenham conheçam todos os dados usamos DTO

### routes

    arquivos que recebem requisições http e utilizam services para
    respectivas ações

## Docker

Meu Dockerfile tem uma imagem personalizada da aplicaćão, o docker-compose usa minha imagem personalizada da aplicaćão e uma imagem oficial do postgres

## Fluxo da aplicação

## server

    Cria o app usando express, configura a porta, alguns módulos e implementa as rotas

### routes

    Cada rota pode conter um middleware e chama um controller passando req e res

### Controller

    Cada Controller recebe um useCase e executa a função do useCase e retorna a resposta

### UseCases

    Cada caso de uso recebe um Repository tem sua função execute onde faz validações, tratamentos de erros, manipula o banco e pode retornar algum valor

### Repository

    Faz uso de contratos para atender ao LSP, possui vários metodos de manipulação do banco

## Uso de Principios SOLID

### LSP - Principio de substituição de liskov

    Quaisquer classes que forem subtipos da minha interface podem ser subistituidas umas pelas outras

    Ou uma classe derivada deve ser subistituida por sua classe base

### DIP

    Em vez de módulos de alto nível dependerem de módulos de baixo nível, ambos dependerão de abstrações.

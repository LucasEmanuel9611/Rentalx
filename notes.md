## DTO

Data transfer object
para que as rotas não tenham conheçam todos os dados usamos DTO

### routes

    arquivos que recebem requisições http e utilizam services para
    respectivas ações

## Docker

Meu Dockerfile tem uma imagem personalizada da aplicaćão, o docker-compose usa minha imagem personalizada da aplicaćão e uma imagem oficial do postgres

## Uso de Principios SOLID

### LSP - Principio de substituição de liskov

    Quaisquer classes que forem subtipos da minha interface podem ser subistituidas umas pelas outras

    Ou uma classe derivada deve ser subistituida por sua classe base

### DIP

    Em vez de módulos de alto nível dependerem de módulos de baixo nível, ambos dependerão de abstrações.

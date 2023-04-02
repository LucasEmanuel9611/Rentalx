## DTO

Data transfer object
para que as rotas não tenham conheçam todos os dados usamos DTO

## Docker

Meu Dockerfile tem uma imagem personalizada da aplicaćão, o docker-compose usa minha imagem personalizada da aplicaćão e uma imagem oficial do postgres

## TSyringe

Faz injeção de dependências ou seja ao invés da propria classe criar suas dependências ele recebe de uma fonte externa, como um contêiner de inversão de controle (IoC).

## Singleton

Design Pattern que garante que uma classe possa ter apenas uma instância e fornece um ponto de acesso global a essa instância.

## Fluxo da aplicação

### server

    Cria o app usando express, configura a porta, faz importação pa uso de contâiners do tsyringe , alguns módulos e implementa as rotas

### routes

    Cada rota pode conter um middleware e chama um controller passando req e res

### Controller

    Cada Controller importa um useCase e faz uso dessa classe por meio de um container.resolve
    pois é uma classe inejtável, executa a função do useCase e retorna a resposta

### UseCases

    É uma classe injetável recebe um Repository por injeção tem a função execute onde faz validações, tratamentos de erros, manipula o banco e pode retornar algum valor

### Repository

    É um singleton atarvés da conf do TSyringe, faz uso de contratos para atender ao LSP e possui vários metodos de manipulação do banco

## Uso de Principios SOLID

### LSP - Principio de substituição de liskov

    Quaisquer classes que forem subtipos da minha interface podem ser subistituidas umas pelas outras

    Ou uma classe derivada deve ser subistituida por sua classe base

### DIP

    Em vez de módulos de alto nível dependerem de módulos de baixo nível, ambos dependerão de abstrações.

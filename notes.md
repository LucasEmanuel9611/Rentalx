## DTO

Data transfer object
para que as rotas não tenham conheçam todos os dados usamos DTO

## Criação de repositório

É importante manter um único lugar para criação de repositório
ex: const categoriesRepositories = new CategoriesRepository();
por exemplo nas rotas

### routes

    arquivos que recebem requisições http e utilizam services para
    respectivaas ações

### services

    arquivos que chamam funções de manipulação de dados e  fazem validações

## Uso de Principios SOLID

### LSP - Principio de substituição de liskov

    Quaisquer classes que forem subtipos da minha interface podem ser subistituidas umas pelas outras

    Ou uma classe derivada deve ser subistituida por sua classe base

### DIP

    Em vez de módulos de alto nível dependerem de módulos de baixo nível, ambos dependerão de abstrações.

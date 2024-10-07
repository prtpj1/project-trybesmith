# 25º Projeto: TrybeSmith
<p align="center">
<img src="https://github.com/prtpj1/prtpj1/blob/main/Headers/25-TrybeSmith.jpg?raw=true" alt="Header" />

---
<p align="center">
<a href="#project-description">Project Description</a> •
<a href="#in-this-project-i-learned-and-put-into-practice">Learning</a> •
<a href="#according-to-the-project-requirements-designated-by-trybe-i-learned-how-to">Requirements</a> •
<a href="#stacks">Stacks</a> •
<a href="#how-to-run-the-application">How to run the application</a>
</p>

---
<p align="center">
<a href="#descrição-do-projeto">Descrição do Projeto</a> •
<a href="#nesse-projeto-aprendi-e-coloquei-em-prática">Aprendizado</a> •
<a href="#de-acordo-com-os-requisitos-do-projeto-designados-pela-trybe-aprendi-como">Requisitos</a> •
<a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a> •
<a href="#como-rodar-a-aplicação">Rodar a Aplicação</a>
</p>

---
## Project Description
I developed this BackEnd project during my learning period at Trybe, where I created the CRUD _*(Create, Read, Update, and Delete)*_ for a medieval store, in the form of an API using TypeScript.<br>

## In this project, I learned and put into practice
- Creating the application layers (Models, Service, and Controllers)
- Developing endpoints that were connected to the database following REST principles

## According to the project requirements designated by Trybe, I learned how to
- ✅ Create an endpoint for product registration
- ✅ Create an endpoint for listing products
- ✅ Create an endpoint for user registration
- ✅ Create an endpoint to list all orders

### Bonus requirements
- ❌ Create an endpoint for user login
- ❌ Create product validations
- ❌ Create user validations
- ❌ Create an endpoint for order registration

_*Note: In some projects, some requirements were not completed due to the accelerated dynamics of the course, not because I didn't know how to do them. At the time, I just needed a little more time.*_

_*I still haven't decided if it's better to leave it this way to demonstrate my progress during my learning or if it would be better to complete the requirements that were missing in the course projects.*_

_*Feedback is welcome.*_

## Stacks
### BackEnd
- Docker
- Express
- MySQL
- Node.js
- TypeScript

<a href="https://www.docker.com/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/Docker2.png?raw=true" width="50" height="50" alt="Docker Icon" /></a><a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/express2.png?raw=true" width="50" height="50" alt="Express Icon" /></a><a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/mySQL2.png?raw=true" width="50" height="50" alt="MySQL Icon" /></a><a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/NodeJS2.png?raw=true" width="50" height="50" alt="NodeJS Icon" /></a><a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/Typescript2.png?raw=true" width="50" height="50" alt="TypeScript Icon" /></a>

## How to run the application?
### Local
- MySQL needs to be running on your machine <br>
⚠️ If you are on Windows, stop MySQL on Windows, as you will use MySQL from your Linux distro through WSL2
- Clone the repository: <br>
`git clone git@github.com:prtpj1/project-trybesmith.git`
- Access the project folder: <br>
`cd project-trybesmith`
- Install the dependencies: <br>
`npm install`
- Create the `.env` file at the root of the project with the following data: <br>
```
    MYSQL_HOST=localhost
    MYSQL_USER=root
    MYSQL_PASSWORD=<your MySQL password>
```
- In the terminal, start the application: <br>
`npm start`

#### :whale: With Docker
- Ensure Docker is running on your computer
- Clone the repository: <br>
`git clone git@github.com:prtpj1/project-trybesmith.git`
- Access the project folder: <br>
`cd project-trybesmith`
- Bring up the container for Docker: <br>
`docker-compose up -d`

With the project running, you can test the routes by clicking on the [Swagger](http://localhost:3000/api-docs/) link
<img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/Swagger/trybesmithapi2.png?raw=true" alt="Swagger Screen" />
<img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/Swagger/trybesmithapi1.png?raw=true" alt="Swagger Screen" />

_*Note: If you have any difficulties with the instructions and would like to give feedback, send me a message*_

---
## Descrição do Projeto
Fiz este projeto BackEnd durante meu período de aprendizagem na Trybe onde desenvolvi o CRUD  _*(Create, Read, Update e Delete - Criação, Leitura, Atualização e Exclusão)*_ para uma loja de itens medievais, no formato de uma API utilizando TypeScript<br>

## Nesse projeto, aprendi e coloquei em prática
- Criação das camadas da aplicação (Models, Service e Controllers)
- Desenvolvimento de endpoints que foram conectados ao banco de dados seguindo os princípios do REST;

## De acordo com os requisitos do projeto designados pela Trybe aprendi como
- ✅ Criar um endpoint para o cadastro de produtos
- ✅ Criar um endpoint para a listagem de produtos
- ✅ Criar um endpoint para o cadastro de pessoas usuárias
- ✅ Criar um endpoint para listar todos os pedidos
### Requisitos bonus
- ❌ Criar um endpoint para o login de pessoas usuárias
- ❌ Criar as validações dos produtos
- ❌ Criar as validações para as pessoas usuárias
- ❌ Criar um endpoint para o cadastro de um pedido

_*OBS: Em alguns projetos alguns requisitos não foram feitos devido a dinamica acelerada do curso e não por eu não saber como fazê-los. Na época eu apenas precisaria de um pouco mais de tempo.*_

_*Ainda não decidi se é melhor deixar desta forma para demonstrar o meu progresso durante meu aprendizado ou se seria melhor completar os requisitos que ficaram faltando nos projetos do curso.*_

_*Feedbacks são bem vindos.*_

## Tecnologias Utilizadas
### BackEnd
- Docker
- Express
- MySQL
- Node.js
- TypeScript

<a href="https://www.docker.com/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/Docker2.png?raw=true" width="50" height="50" alt="Docker Icon" /></a><a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/express2.png?raw=true" width="50" height="50" alt="Express Icon" /></a><a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/mySQL2.png?raw=true" width="50" height="50" alt="MySQL Icon" /></a><a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/NodeJS2.png?raw=true" width="50" height="50" alt="NodeJS Icon" /></a><a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/Typescript2.png?raw=true" width="50" height="50" alt="TypeScript Icon" /></a>

## Como rodar a aplicação?
### Local
- O MySQL precisa estar rodando na sua máquina <br>
⚠️ Se estiver no Windows, pare o MySQL do Windows, pois usará o MySQL da sua distro Linux através do WSL2
- Clone o repositório: <br>
`git clone git@github.com:prtpj1/project-trybesmith.git`
- Acesse a pasta do projeto: <br>
`cd project-trybesmith`
- Instale as dependências: <br>
`npm install`
- Crie o arquivo `.env` na raiz do projeto com os seguintes dados: <br>
```
    MYSQL_HOST=localhost
    MYSQL_USER=root
    MYSQL_PASSWORD=<sua senha no MySQL>

```
- No terminal inicie a aplicação: <br>
`npm start`

#### :whale: Rodando com Docker
- Confirme que o Docker está rodando no seu computador
- Clone o repositório: <br>
`git clone git@github.com:prtpj1/project-trybesmith.git`
- Acesse a pasta do projeto: <br>
`cd project-trybesmith`
- Suba o container para o Docker: <br>
`docker-compose up -d`

Com o projeto rodando você poderá testar as rotas clicando no link do [Swagger](http://localhost:3000/api-docs/)
<img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/Swagger/trybesmithapi2.png?raw=true" alt="Tela do Swagger" />
<img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/Swagger/trybesmithapi1.png?raw=true" alt="Tela do Swagger" />


</br>
</br>

_*OBS: Se tiver alguma dificuldade com as instruções e quiser dar um feedback me mande uma mensagem*_


  # Projeto Fullstack
  Resolução do desafio técnico do processo seletivo da @Beeteller. 

Neste projeto foi desenvolvido uma aplicação fullstack utilizando React, Node e Mysql. A aplicação está funcionando da seguinte forma:

#### Backend
- Banco de dados: Está sendo utilizado mysql para administrar os usuários cadastrados no site. 
- Cotações: o back faz requisições para https://economia.awesomeapi.com.br/last/ e faz o tratamento do retorno removendo itens que não serão utilizados. Após esse tratamento é aguardado uma requisição do frontend e enviado as cotações atuais.
- Login: O backend também está responsável por validar o login do usuário, retornando um jwtoken se o usuário for digitado corretamente ou retornando um status(404) se o usuário não for encontrado no banco de dados.  Também é possível criar um novo usuário e adicionar ao banco de dados.
###  Frontend
No frontend foram criados paginas em react para login, cadastro de novo usuário e cotações.

- login: essa pagina é reponsavel por enviar os dados de email e senha para o back, após efetuar login com sucesso você será redirecionado para pagina das cotações
- register: uma pagina para criar um novo usuário enviando os novos dados para o backend
- cotações: a página principal da aplicação onde é possível ver todos os dados recebidos pelo backend



  

## Tecnologias

  

  

- Node.Js

  

- React

  

- SQL

  

- Docker

  

- Tests

  

  

## Instalação

  

### Clone este repositório

  

  

```bash

  

  

git clone https://github.com/iahgo/projetoBeeteller.git

  

  

```

  

  

  

### Navegue até a pasta do projeto

  

  

  

```bash

  

  

cd projetoBeeteller

  

  

```

  

  

  

### Inicie o Docker Compose

  

É necessário possuir Docker instalado, se não possuir pode instalar através desse link: https://docs.docker.com/engine/install/

  

#### Atenção:

  

- Este comando irá iniciar todas as configurações necessárias e popular o banco de dados.

  

- Certifique-se de não ter nenhum serviço rodando nas portas: 3000, 3001 e 3002.

  

- 3000: frontend

  

- 3001: backend

  

- 3002: database

  

- É necessário subir o container 'app' completo, o container possui healthchecks para assegurar se está operacional ou não.

  

  

```bash

  

  

npm run compose:up

  

  

```

  

  

- Este comando pode demorar um pouco para ser executado, pois nele está sendo instalado todas as dependências do projeto.

  

  

  

## Uso

  

  

  

A aplicação estará disponível em http://localhost:3000.

##### usuários já cadastrados para login: 
- iahgo@icloud.com abc123
- caiovidal@gmail.com senha123
- beeteller@beeteller.com beeteller


  

  

### Encerrar container docker

  

- Você pode derrubar o container docker através do comando dentro do diretório 'fullstack-challenge-oncase'

  

```bash

  

  

npm run compose:down

  

  

```

  

## Testes

### Backend

- Acesse o diretório 'backend'

#### Para testar a aplicação:

```bash

  

  

npm test

  

  

```

  

#### Para checar a cobertura de testes:

```bash

  

  

npm run test:coverage

  

  

```
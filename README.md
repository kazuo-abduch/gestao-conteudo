# Projeto de gestão de lista

## Sobre o projeto

O intuito deste projeto é facilitar o gerenciamento de listas de atividades com a possibilidade de atualizar seu progresso, bem como manter o histórico de atualização disponível para consulta

## Tecnologias

### Frontend
React.js
React router
Hooks e Context
Axios

Essas tecnologias foram consideradas para componentização da aplicação e para desenvolver uma aplicação de mais de uma página. Pela pouca quantidade de componentes, optei pelo uso de Hooks e Context Api para comunicação entre os componentes

### Backend
Node.js
MySQL
Sequelize
Express
Cors

Essas tecnologias foram consideradas para facilidade de comunicação com aplicação React, e para futura escalabilidade do banco de dados. O banco relacional me pareceu mais interessante para quando for adicionado informações de usuário e relacioná-las aos posts de conteúdo e updates.

## Antes de começar

Antes de mais nada, repare que o projeto possui dois diretórios cada um responsável por armazenar os códigos referentes ao backend e o frontend e suas depêndencias.

### Instalação

Clone o repositório em sua máquina local

```sh
git clone git@github.com:kazuo-abduch/gestao-conteudo.git
```

As dependências do backend e do frontend estão separadas em suas respectivas pastas, portanto, para instalá-las deve ser preciso antes acessar a pasta em seu terminal

```sh
cd backend
npm install
cd ..
cd frontend
npm install
```

Para o backend e o frontend conseguirem se conectar com seu banco de dados, são necessárias duas modificações locais.
Primeiro, crie um arquivo '.env' na raíz do diretório do `./backend` com as informações para conexão de sua api com o banco

```
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_DATABASE=
HOSTNAME=
PORT=
```

>> Não se preocupe, o arquivo está referenciado no `.gitignore` e não será salvo em seu repositório remoto.

No diretório do `./frontend`, acesse o arquivo `./src/api/api.js` e, na segunda linha na variável faça a alteração do valor da porta de acordo com a informação passada no arquivo `.env` no backend

``` javascript
const API_PORT = '3001';
```

## Iniciando a aplicação


### Banco de Dados
Os seguintes comandos do sequelize em seu terminal acessando o diretório do backend irão iniciar o banco de dados

```sh
npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate
```

### Backend
Confirmado a criação do banco de dados, inicie a api com o comando abaixo

```sh
node index.js
```

### Frontend
Acesse o diretório do frontend e inicie a aplicação react com o comando

```sh
npm start
```

## Guia de uso

O uso do aplicativo é direto e simples. Existem dois campos de input, um para o título da tarefa, e outro para descrição. Ao finalizar, clique no botão `Confirm` para salvar a tarefa nova. Ao clicar no card desta tarefa, você será redirecionado para a página de detalhes e histórico de atualização onde outros dois campos de input serão usados para enviar uma atualização da tarefa selecionada.
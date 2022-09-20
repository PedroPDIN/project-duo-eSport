<h1>(nlw - Duo eSports)</h1>
<h2>Server (back-end)</h2>

<h2>Stakes Utilizadas na diretório Server (Back-end)</h2>

<div>
  <details>
    <summary>Stakes Server</summary>

    - NodeJS
    - TypeScript
    - Express
    - Prisma
    - Cors
    - sqlite
    - ts-node-dev
  </details>
</div>

<div>
  <h2>Instalação do Projeto</h2>

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:PedroPDIN/project-duo-eSport.git`
  - Atenção em cada diretório(web, mobile e server) execute o passo a passo abaixo:

  <details>
  <summary>Server (Back-end)</summary>

  * Entre do repositório server com o comando: `cd server` (lembrando que você precisa esta no terminal do diretório server).

  * Logo após Instale as dependências com o comando: `npm install`

  * É preciso que haja a conexão com banco para que o server (back-end), funcione corretamente com isso é  necessário criar e adicionar informações ao arquivo `.env`. Existe mas detalhes para implementar os dados no arquivo `.env.example`.

  * Logo depois basta executar o comando `npx prisma generate`. Isso restabelecerá o link entre o arquivo `schema.prisma` e `.env`.
  </details>
</div>
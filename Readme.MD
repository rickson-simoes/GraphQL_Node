## **Executar projeto GraphQL**

- Executar o comando dentro da pasta do projeto: **node src/server.js**

- Executar a imagem docker do mongodb: **docker run --name mongographql -p 27017:27017 -d -t mongo**

- Executar a URL: **http://localhost:4000/**
<br />

  1 - Query retornando todos usuarios:
   `query {
      users {
        id
        name
        email  
      }
    }`

[![Query1](https://raw.githubusercontent.com/rickson-simoes/GraphQL_Node/master/imgs_exemplo/img1.png "img1")](https://raw.githubusercontent.com/rickson-simoes/GraphQL_Node/master/imgs_exemplo/img1.png "img1")

  2 - Mutation para criação de usuarios:
  `mutation {
      createUser(name: "Rickson", email: "rick123@hotmail.com") {
        id
    }
  }`

[![Mutation1](https://raw.githubusercontent.com/rickson-simoes/GraphQL_Node/master/imgs_exemplo/img2.png "img2")](https://raw.githubusercontent.com/rickson-simoes/GraphQL_Node/master/imgs_exemplo/img2.png "img2")

  3 - Query retornando um usuario especifico pelo id:
  `query {
      user(id:" *inserir id do usuario criado* ") {
        name
        email
      }
    }
  }`

[![Query2](https://raw.githubusercontent.com/rickson-simoes/GraphQL_Node/master/imgs_exemplo/img3.png "img3")](https://raw.githubusercontent.com/rickson-simoes/GraphQL_Node/master/imgs_exemplo/img3.png "img3")


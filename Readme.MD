## **Executar projeto GraphQL**

- Executar o comando dentro da pasta do projeto: **node src/server.js**

- Executar a imagem docker do mongodb: **docker run --name mongographql -p 27017:27017 -d -t mongo**

- Executar a URL: **http://localhost:4000/**
  - Query:
   `query {
      users {
        id
        name
        email  
      }
    }`

  - Mutation:
  `mutation {
      createUser(name: "Rickson", email: "rick123@hotmail.com") {
        id
    }
  }`


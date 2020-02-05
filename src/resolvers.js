const users = [
  {id: 1, name: "Rickson", email: "rickson.graphql@graphql.com" },
  {id: 2, name: "Rickson2", email: "rickson.graphql2@graphql2.com" }
];

module.exports = {
  Query: {
    Users: () => users,
    User: () => users[0]
  },

  Mutation: {
    createUser: () => users[0]
  }
};
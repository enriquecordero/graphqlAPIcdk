const {ApolloServer, gql} = require('apollo-server-lambda')

const {typeDefs} =require("./schema/type-def")
const {resolvers} =require("./schema/resolvers")

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground:true,
  introspection:true,
})

exports.graphqlHandler = server.createHandler();

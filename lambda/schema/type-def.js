const {gql} = require('apollo-server-lambda')

const typeDefs = gql `

type User {
  id: ID!
  name: String!
  lastname: String!
  age: Int!
  nationality: Nationality!
}

type Query {
  users: [User!]!
  user(id:ID!): User!
}


enum Nationality{
    CANADA
    BRAZIL
    INDIA
    ALEMANIA
    CHILE
}
`;

module.exports = {typeDefs}
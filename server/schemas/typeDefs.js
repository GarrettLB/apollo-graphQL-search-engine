const { gql } = require('apollo-server-express');

const typeDefs = gql`
  input BookInput {
    author: [String]
    description: String!
    title: String!
    boodId: String!
    image: String
    link:string
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: String
    user: [User]
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookInput): User 
    removeBook(bookId: String!): User
  }

`;

module.exports = typeDefs;
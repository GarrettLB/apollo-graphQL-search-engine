const { Book, User } = require('../models');
import '../controllers/user-controller'
import { createUser, deleteBook, getSingleUser, login } from '../controllers/user-controller';

const resolvers = {
  Query: {
    me: async () => {
      return (getSingleUser())
    }
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      return login(email, password)
    },
    addUser: async (parent, { username, email, password }) => {
      return createUser(username, email, password)
    },
    saveBook: async () => {

    },
    removeBook: async (parent, { _id }) => {
      return deleteBook(_id)
    },
  }
};

module.exports = resolvers;
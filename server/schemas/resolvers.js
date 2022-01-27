const { Book, User } = require('../models');

const resolvers = {
  Query: {
    me: async () => {
      return User.find({})
    }
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      return User.findOne({
        email: email, password: password
      })
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
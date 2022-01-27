const { Book, User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async () => {
      return User.find({})
    }
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const finduser = await User.findOne({
        email: email
      })

      if (!finduser) {
        throw new AuthenticationError('No user with this email found!')
      }

      const correctPw = await finduser.isCorrectPassword(body.password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(finduser)
      return ({token, finduser})
    },
    addUser: async (parent, { username, email, password }) => {
      return createUser(username, email, password)
    },
    saveBook: async (parent, args) => {


    },
    removeBook: async (parent, { _id }) => {
      return deleteBook(_id)
    },
  }
};

module.exports = resolvers;
import { gql } from '@apollo/client'

export const LOGIN_USER = gql` 
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

export const ADD_USER = gql` 
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(name: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const SAVE_BOOK = gql` 
  mutation saveBook($input: BookInput!) {
    saveBook(input: $input) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks
      }
    }
  }
`;

export const REMOVE_BOOK = gql` 
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks
      }
    }
  }
`;
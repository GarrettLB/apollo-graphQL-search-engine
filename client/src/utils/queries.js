import { gql } from '@apollo/client'

export const GET_ME = gql`
  query me {
    token
    me {
      _id
      username
      email
      bookCount
      savedBooks
    }
  }
`;

export const searchGoogleBooks = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};
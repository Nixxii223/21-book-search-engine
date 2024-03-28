import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }`;

export const LOGIN_USER = gql`
mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        bookCount
        email
        savedBooks {
          authors
          description
          image
          link
          title
        }
        username
      }
    }
  }`;

export const SAVE_BOOK = gql`
mutation Mutation($bookData: BookInput!) {
    saveBook(bookData: $bookData) {
      _id
      email
      username
      savedBooks {
        authors
        description
        title
        bookId
        image
        link
      }
    }
  }`;

export const REMOVE_BOOK = gql`
mutation Mutation($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      email
      username
      savedBooks {
        authors
        description
        title
        bookId
        image
        link
      }
    }
  }`;
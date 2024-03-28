import { gql } from '@apollo/client';

export const QUERY_GET_ME = gql`
    query me {
        me {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            description
            title
            image
            link
        }
    }
}`;

export const QUERY_ME_BASIC = gql`
    query me {
        me {
        _id
        username
        email
    }
}`;


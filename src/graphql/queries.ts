import { gql } from '@apollo/client';

export const GET_ALBUMS = gql`
  query GetAlbums {
    albums {
      name
      artist
      genre
      artwork
    }
  }
`;

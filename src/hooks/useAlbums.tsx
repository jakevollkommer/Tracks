import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALBUMS } from '../graphql/queries';

const useAlbums = () => {
  const { loading, error, data } = useQuery(GET_ALBUMS);
  const [albums, setAlbums] = useState<Album[]>([]);

  // Set albums from the gql query
  useEffect(() => {
    if (!data) return;
    const albums: Album[] = data.albums;
    setAlbums(albums);
  }, [data]);

  return { loading, error, albums };
};

export default useAlbums;

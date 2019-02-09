import React from 'react';
import { inject, observer } from 'mobx-react';
import { Header } from '../ui';
import { PhotoStream } from '../features/PhotoStream';
import { Filters } from '../features/Filters';

const Home = ({ photoStore }) => {
  return (
    <>
      <Header title="Performers Gallery" />
      <Filters />
      <PhotoStream
        fetchPhotos={photoStore.fetch}
        hasMore={photoStore.hasMore}
        lastPhotoId={photoStore.lastPhotoId}
        photos={photoStore.photos}
      />
    </>
  );
};

export default inject('photoStore')(observer(Home));

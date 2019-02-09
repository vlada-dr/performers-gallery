import React from 'react';
import { inject, observer } from 'mobx-react';
import { Header } from '../../ui';
import { PhotoStream } from './PhotoStream';

const Home = ({ photoStore }) => {
  return (
    <>
      <Header title="Performers Gallery" />
      <PhotoStream
        fetchPhotos={photoStore.fetch}
        photos={photoStore.photos}
      />
    </>
  );
};

export default inject('photoStore')(observer(Home));

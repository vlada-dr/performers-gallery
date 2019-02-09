import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { Header } from '../ui';
import { PhotoStream } from '../features/PhotoStream';
import { Filters } from '../features/Filters';
import Headroom from 'react-headroom-extended';

const Home = ({ photoStore }) => {
  return (
    <>
      <Headroom>
        <Header title="Performers Gallery" />
        <Filters
          selectEmotion={photoStore.fetch}
          selected={photoStore.emotion}
        />
      </Headroom>
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

const FixedContent = styled.div`
  background: white;
  left: 0;
  right: 0;
  top: 0;
  position: fixed;
  z-index: 1;
`;

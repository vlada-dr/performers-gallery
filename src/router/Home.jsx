import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { Header } from '../ui';
import { PhotoStream } from '../features/PhotoStream';
import { Filters } from '../features/Filters';

const Home = ({ photoStore }) => {
  return (
    <>
    <RelativeWrapper>
      <Header title="Performers Gallery" />
      <Filters
        selectEmotion={photoStore.fetch}
        selected={photoStore.emotion}
      />
      <HeaderBackground />
    </RelativeWrapper>
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

const HeaderBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: #8C43FF;
  height: calc(100% + 100px);
  z-index: -1;
`;

const RelativeWrapper = styled.div`
  position: relative;
  z-index: 0;
  height: auto;
`;

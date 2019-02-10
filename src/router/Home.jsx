import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { Header } from '../ui';
import { PhotoStream } from '../features/PhotoStream';
import { Filters } from '../features/Filters';
import { HomeHeader } from '../ui/icons';

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
      <StyledHomeHeader />
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

const StyledHomeHeader = styled(HomeHeader)`
  position:fixed;
  width: 150%;
  left: -10%;
  bottom: calc(40% - 2px);
`;

const HeaderBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60%;
  z-index: -1;
  background: linear-gradient(60deg, #8f00d6 0, #17b9e6 100%) no-repeat scroll center center/cover;
`;


const RelativeWrapper = styled.div`
  position: relative;
  z-index: 0;
  height: auto;
  padding-bottom: 200px;
`;

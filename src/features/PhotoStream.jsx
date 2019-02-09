import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import { GalleryPhoto } from '../models';
import { Loader } from '../ui';
import { EMOTIONS } from '../Emotions';
import { Photo } from './Photo';

export class PhotoStream extends React.Component {
  static propTypes = {
    fetchPhotos: PropTypes.func.isRequired,
    hasMore: PropTypes.bool.isRequired,
    lastPhotoId: PropTypes.number.isRequired,
    photos: PropTypes.arrayOf(PropTypes.shape(GalleryPhoto)),
  };

  static defaultProps = {
    photos: [],
  };

  render() {
    const {
      photos, hasMore, fetchPhotos,
    } = this.props;

    return (
      <>
        <InfiniteScroll
          loadMore={() => fetchPhotos()}
          hasMore={hasMore}
          useWindow={false}
          loader={<Loader />}
        >
          <StyledWrapper>
            {photos.map(p => <Photo key={p.id} {...p} />)}
          </StyledWrapper>
        </InfiniteScroll>
      </>
    );
  }
}

const StyledWrapper = styled.div`
  width: 932px;
  display: flex;
  flex-wrap: wrap;
  margin: auto;

  & > * {
    margin-bottom: 16px;
    
    &:not(:nth-child(3n)) {
      margin-right: 16px;
    }
  }
`;


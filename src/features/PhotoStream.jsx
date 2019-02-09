import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import { GalleryPhoto } from '../models';

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

  componentDidMount() {
    const { fetchPhotos, lastPhotoId } = this.props;

    fetchPhotos(lastPhotoId);
  }

  render() {
    const {
      photos, lastPhotoId, hasMore, fetchPhotos,
    } = this.props;

    return (
      <>
        <InfiniteScroll
          loadMore={() => fetchPhotos(lastPhotoId)}
          hasMore={hasMore}
          useWindow={false}
          loader={<div className="loader" key={0}>Loading ...</div>}
        >
          <StyledWrapper>
            {photos.map(p => (
              <StyledPhoto>
                <img src={p.photoUrl} key={p.id} />
              </StyledPhoto>
            ))}
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

const StyledPhoto = styled.div`
  width: 300px;
  height: 300px;
  display: inline-block;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

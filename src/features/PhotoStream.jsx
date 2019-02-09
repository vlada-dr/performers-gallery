import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { toJS } from 'mobx';
import InfiniteScroll from 'react-infinite-scroller';
import { GalleryPhoto } from '../models';
import { Loader } from '../ui';
import { Photo } from './Photo';
import { media } from '../ui/media';
import { ActivePhoto } from './ActivePhoto';

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

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

  state = {
    active: null,
  };

  setActive = active => this.setState({ active });

  render() {
    const {
      photos, hasMore, fetchPhotos,
    } = this.props;

    const { active } = this.state;

    return (
      <>
        <InfiniteScroll
          loadMore={() => fetchPhotos()}
          hasMore={hasMore}
          useWindow={false}
          loader={<Loader />}
        >
          <StyledWrapper>
            {chunk(photos, 3).map((row, i) => (
              <StyledBlockWrapper key={i}>
                <StyledRow>
                  {row.map(p => (
                    <Photo
                      key={p.id}
                      active={p.id === active}
                      setActive={this.setActive}
                      {...p}
                    />
                  ))}
                </StyledRow>
                {
                  row.find(photo => photo.id === active) && (
                    <ActivePhoto
                      facesFound={toJS(row.find(photo => photo.id === active).facesFound)}
                    />
                  )
                }
              </StyledBlockWrapper>
            ))}
          </StyledWrapper>
        </InfiniteScroll>
      </>
    );
  }
}

const StyledWrapper = styled.div`
  max-width: 100vw;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  
  ${media.tab`
    max-width: 782px;
  `}
  
  ${media.desktop`
    max-width: 932px;
  `}
`;

const StyledRow = styled.div`
  width: 100%;
  display: flex;
  
  margin-bottom: 8px;
`;

const StyledBlockWrapper = styled.div`
  width: 100%;
`;

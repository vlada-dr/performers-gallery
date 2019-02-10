import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import Fade from 'react-reveal/Fade';
import chunk from 'lodash/chunk';
import { GalleryPhoto } from '../models';
import { Loader } from '../ui';
import { Photo } from './Photo';
import { media } from '../ui/media';

const { outerWidth } = window;
const cardsInRow = outerWidth < 800 ? outerWidth < 400 ? 1 : 2 : 3;

export class PhotoStream extends React.Component {
  static propTypes = {
    fetchPhotos: PropTypes.func.isRequired,
    hasMore: PropTypes.bool.isRequired,
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
      <InfiniteScroll
        loadMore={() => fetchPhotos()}
        hasMore={hasMore}
        loader={<Loader />}
      >
        <StyledWrapper>



          {chunk(photos, cardsInRow).map((row, i) => (
            <StyledBlockWrapper>
          <Fade key={`fade-stream-row-${i}`} bottom>
            <StyledRow key={`stream-row-${i}`}>
              {row.map(p => (
                <Photo
                  key={`photo-${p.id}`}
                  cardsInRow={cardsInRow}
                  {...p}
                />
              ))}
            </StyledRow>


            </Fade>
            </StyledBlockWrapper>
          ))}
        </StyledWrapper>
      </InfiniteScroll>
    );
  }
}

const StyledWrapper = styled.div`
  max-width: 95vw;
  display: flex;
  flex-wrap: wrap;
  margin: -200px auto 0;
  z-index: 1;
  
  ${media.tab`
    max-width: 90vw;
  `}
  
  ${media.desktop`
    max-width: 70vw;
  `}
`;

const StyledRow = styled.div`
  width: 100%;
  display: flex;
  
  margin-bottom: 32px;
`;

const StyledBlockWrapper = styled.div`
  width: 100%;
`;

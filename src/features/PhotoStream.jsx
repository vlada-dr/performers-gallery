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

const { innerWidth } = window;

const cardsInRow = innerWidth < 800 ? innerWidth < 400 ? 1 : 2 : 3;

export class PhotoStream extends React.Component {
  static propTypes = {
    fetchPhotos: PropTypes.func.isRequired,
    hasMore: PropTypes.bool.isRequired,
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
            {chunk(photos, cardsInRow).map((row, i) => (
              <StyledBlockWrapper key={i}>
                <Fade bottom cascade>
                  <StyledRow>
                    {row.map(p => (
                      <Photo
                        key={p.id}
                        active={p.id === active}
                        setActive={this.setActive}
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
      </>
    );
  }
}

const StyledWrapper = styled.div`
  max-width: 95vw;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
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

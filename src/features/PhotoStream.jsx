import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import Fade from 'react-reveal/Fade';
import { GalleryPhoto } from '../models';
import { Loader } from '../ui';
import { Photo } from './Photo';

const chunk = (arr, size) => Array.from({
  length: Math.ceil(arr.length / size),
}, (v, i) => arr.slice(i * size, i * size + size));

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
            {chunk(photos, 3).map((row, i) => (
              <StyledBlockWrapper key={i}>
                <Fade bottom cascade>
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
  max-width: 70vw;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  z-index: 1;
`;

const StyledRow = styled.div`
  width: 100%;
  display: flex;
  
  margin-bottom: 32px;
`;

const StyledBlockWrapper = styled.div`
  width: 100%;
`;

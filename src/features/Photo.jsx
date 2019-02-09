import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { EMOTIONS } from '../Emotions';
import { GalleryPhoto } from '../models';

export function Photo({ facesFound, photoUrl, id }) {
  return (
    <StyledPhoto>
      <StyledEmotions>
        {
          facesFound.map(({ castEmotion }) => (
            <StyledEmotion>
              {EMOTIONS[castEmotion.toLowerCase()].emoji}
            </StyledEmotion>
          ))
        }
      </StyledEmotions>
      <img src={photoUrl} key={id} />
    </StyledPhoto>
  );
}

Photo.propTypes = PropTypes.shape(GalleryPhoto);

const StyledPhoto = styled.div`
  width: 100vw;
  height: 100vw;
  display: inline-block;
  position: relative;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  
  @media only screen and (min-width: 800px) {
    width: 250px;
    height: 250px;
  }
  
  @media only screen and (min-width: 1000px) {
    width: 300px;
    height: 300px;
  }
`;

const StyledEmotions = styled.div`
  display: flex;
  position: absolute;
  right: 8px;
  top: 8px;
`;

const StyledEmotion = styled.div`
  border-radius: 50%;
  padding-left: 2px;
  background: #fff;
  width: 30px;
  height: 30px;
  margin-left: 2px;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

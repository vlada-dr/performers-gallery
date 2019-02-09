import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { EMOTIONS } from '../Emotions';
import { GalleryPhoto } from '../models';
import { media } from '../ui/media';

export function Photo({ active, facesFound, photoUrl, setActive, id }) {
  const key = facesFound.length ? '' : 'Faces not found';
  const value = facesFound.length || '';

  return (
    <StyledPhoto
      active={active}
      onClick={() => facesFound.length && setActive(id)}
      width={100 / 3}
    >
      <StyledImageWrapper>
        <img src={photoUrl} key={id} />
      </StyledImageWrapper>
      <StyledInfo>
        <StyledKey>{key}</StyledKey>
        {
          facesFound.map(({ castEmotion }) => (
            <StyledSvg>
              {EMOTIONS[castEmotion.toLowerCase()].icon}
            </StyledSvg>
          ))
        }
      </StyledInfo>
    </StyledPhoto>
  );
}

Photo.propTypes = PropTypes.shape(GalleryPhoto);

const StyledPhoto = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  
  width: calc(${p => p.width}% - 16px);
  height: auto;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #d7d7d7;
  margin-bottom: 2px;
  
  ${p => p.active && css`
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  `}
  
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

const StyledImageWrapper = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
 
  ${media.pho`
    height: 145px;
  `}
  
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const StyledKey = styled.div`
  display: inline-flex;
  margin: 0 8px;
  color: #9e9e9e;
  height: 30px;
  align-items: center;
`;

const StyledInfo = styled.div`
  padding: 16px 8px;
  display: flex;
  align-items: center;
`;

const StyledSvg = styled.div`
  svg {
    width: 30px;
    height: 30px;
  }
`;

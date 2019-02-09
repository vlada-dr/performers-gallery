import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { EMOTIONS } from '../Emotions';
import { GalleryPhoto } from '../models';
import { media } from '../ui/media';

export class Photo extends React.Component {
  state = {
    visible: null,
  };

  setVisible = visible => this.setState({ visible });

  render() {
    const {
      active, facesFound, photoUrl, setActive, id,
    } = this.props;
    const { visible } = this.state;

    const visibleEmotions = visible ? Object.entries(facesFound[visible].emotion)
      .map(([emotion, value]) => ({
        emotion: emotion.toLowerCase(),
        value,
      })) : [];

    return (
      <StyledPhoto
        active={active}
        onClick={() => facesFound.length && setActive(id)}
        width={100 / 3}
      >
        <StyledImageWrapper>
          <img src={photoUrl} key={id} />
          <StyledEmotions>
            {
              facesFound.map(({ castEmotion }, i) => (
                <StyledSvg
                  key={i}
                  color={EMOTIONS[castEmotion.toLowerCase()].shadow}
                  onMouseOver={() => this.setVisible(i)}
                >
                  {EMOTIONS[castEmotion.toLowerCase()].icon}
                </StyledSvg>
              ))
            }
          </StyledEmotions>
        </StyledImageWrapper>
        {visible && (
          <EmotionsList>
            {
              visibleEmotions.map(({ emotion, value}) => (
                <div key={emotion}>
                  {EMOTIONS[emotion].icon}
                  <span>
                    {value}
                  </span>
                </div>
              ))
            }
          </EmotionsList>
        )}
      </StyledPhoto>
    );
  }
}

Photo.propTypes = PropTypes.shape(GalleryPhoto);

const StyledPhoto = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  
  width: calc(${p => p.width}% - 16px);
  height: auto;
  border-radius: 8px;
  box-shadow: 0 5px 5px 0 rgba(233,240,243,0.5), 0 0 0 1px #E6ECF8;
  margin-bottom: 2px;
  
  ${p => p.active && css`
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  `}
  
  &:not(:last-child) {
    margin-right: 24px;
  }
`;

const StyledImageWrapper = styled.div`
  height: 250px;
  display: flex;
  width: calc(100% + 2px);
  margin: -1px 0 0 -1px;
  border-radius: 8px;
  overflow: hidden;
 
  ${media.pho`
    height: 145px;
  `}
  
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const StyledSvg = styled.div`
  background: #fff;
  background-size: 200%;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-left: 4px;
  padding: 8px;
  color: ${p => p.color};
  
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`;

const StyledEmotions = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
  display: flex;
`;

const EmotionsList = styled.div`
  width: 30%;
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  background: #8C43FF;
  display: flex;
  flex-direction: column;
`;

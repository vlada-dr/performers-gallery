import React from 'react';
import styled, { css } from 'styled-components';
import { EMOTIONS } from '../Emotions';
import { media } from '../ui/media';

export class Photo extends React.Component {
  state = {
    visible: null,
  };

  setVisible = visible => this.setState({ visible });

  render() {
    const {
      active, facesFound, photoUrl, setActive, id, cardsInRow,
    } = this.props;

    const { visible } = this.state;

    const castEmotions = facesFound.map(({ castEmotion, emotion }) => ({
      icon: EMOTIONS[castEmotion.toLowerCase()].icon,
      value: Math.floor(emotion[castEmotion.toLowerCase()]),
    }));

    return (
      <StyledPhoto
        active={active}
        onClick={() => facesFound.length && setActive(id)}
        width={100 / cardsInRow}
        onMouseOver={() => this.setVisible(true)}
        onMouseOut={() => this.setVisible(false)}
      >
        <StyledImageWrapper filter={visible}>
          <img src={photoUrl} />
          <StyledEmotions visible={visible}>
            {
              facesFound.map(({ castEmotion }, i) => (
                <StyledSvg
                  key={`face-found-${i}`}
                  color={EMOTIONS[castEmotion.toLowerCase()].shadow}
                >
                  {EMOTIONS[castEmotion.toLowerCase()].icon}
                </StyledSvg>
              ))
            }
          </StyledEmotions>
          <EmotionsList
            visible={visible}
          >
            {
              visible && castEmotions.map(({ icon, value }) => (
                <div key={id}>
                  {icon}
                    {value}%
                </div>
              ))
            }
          </EmotionsList>
          <OverflowWrapper filter={visible} />
        </StyledImageWrapper>
      </StyledPhoto>
    );
  }
}

const StyledPhoto = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  cursor: pointer;
  z-index: 11;
  
  width: calc(${p => p.width}% - 16px);
  height: auto;
  border-radius: 8px;
  box-shadow: 0 8px 24px 0 rgba(0,0,0,.11);
  margin-bottom: 2px;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  
  &:not(:last-child) {
    margin-right: 24px;
  }
  
  ${media.pho`
    margin-left: 8px;
  `}
`;

const OverflowWrapper = styled.div`
  transition: all ease-in-out .3s;
  content: '';
  width: calc(100% + 1px);
  height: calc(100% + 1px);
  position: absolute;
  top: -1px;
  left: -1px;
  background: #fff;
  opacity: ${p => (p.filter ? '0.3' : '0')};
`;

const StyledImageWrapper = styled.div`
  height: 250px;
  display: flex;
  width: calc(100% + 2px);
  margin: -1px 0 0 -1px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  
  @media(-webkit-min-device-pixel-ratio: 2), 
  (min-resolution: 192dpi) { 
    ${media.tab`
      height: 450px;
    `}
  }
  
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
  cursor: pointer;
  
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
  z-index: ${p => (p.visible ? '-1' : '3')};
  opacity: ${p => (p.visible ? '0' : '1')};
  transition: all ease-in-out .3s;
`;

const EmotionsList = styled.div`
  transition: all ease-in-out .3s;
  width: ${p => (p.visible ? '40%' : '0px')};
  position: absolute;
  right: -1px;
  top: -1px;
  bottom: 0;
  border-radius: 0 8px 8px 0;
  background: linear-gradient(60deg, rgba(161, 23, 230, .6) 0, rgba(23, 185, 230, .6) 100%) no-repeat scroll center center/cover;
  display: flex;
  flex-direction: column;
  height: calc(100% + 1px);
  justify-content: center;
  padding: 4px ${p => (p.visible ? '8px' : '0px')};
  z-index: 0;
  opacity: ${p => (p.visible ? '0.6%' : '0')};
  font-weight: bold;

  & > div {
    display: flex;
    align-items: center;
    color: white;
    padding: 4px 12px;
    z-index: 0;
  }
  
  svg {
    width: 30px;
    height: 30px;
    fill: white;
    margin-right: 4px;
  }
`;

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
      active, facesFound, photoUrl, setActive, id,
    } = this.props;

    const { visible } = this.state;

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
                  onMouseOver={() => this.setVisible(true)}
                  onMouseOut={() => facesFound.length > 5 && i > 2 && this.setVisible(false)}
                >
                  {EMOTIONS[castEmotion.toLowerCase()].icon}
                </StyledSvg>
              ))
            }
          </StyledEmotions>
          <EmotionsList
            visible={visible}
            onMouseOut={() => this.setVisible(false)}
          >
            {
              visible && facesFound.map(({ castEmotion, emotion, id }) => (
                <div key={id}>
                  {EMOTIONS[castEmotion.toLowerCase()].icon}
                  <span>
                    {emotion[castEmotion.toLowerCase()]}
                  </span>
                </div>
              ))
            }
          </EmotionsList>
        </StyledImageWrapper>
      </StyledPhoto>
    );
  }
}

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
`;

const EmotionsList = styled.div`
  transition: all ease-in-out .3s;
  width: ${p => (p.visible ? '40%' : '0px')};
  position: absolute;
  right: -1px;
  top: -1px;
  bottom: 0;
  border-radius: 0 8px 8px 0;
  background: #8C43FF;
  display: flex;
  flex-direction: column;
  height: calc(100% + 1px);
  justify-content: center;
  padding: 4px ${p => (p.visible ? '8px' : '0px')};
  
  & > div {
    display: flex;
    align-items: center;
    color: white;
    padding: 4px 12px;
  }
  
  svg {
    width: 20px;
    height: 20px;
    fill: white;
    margin-right: 4px;
  }
`;

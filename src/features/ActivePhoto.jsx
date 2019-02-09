import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { EMOTIONS } from '../Emotions';


export class ActivePhoto extends React.Component {
  static propTypes = {
    // fieldName: PropTypes.array.isRequired,
  };

  state = {
    activeFace: 0,
  };

  render() {
    const { facesFound } = this.props;

    const { activeFace } = this.state;

    return (
      <>
        <StyledWrapper>
          <div>
            {facesFound.map((f, i) => (
              <Tab>
                Face {i + 1}
              </Tab>
            ))}
          </div>
          {Object.entries(facesFound[activeFace].emotion).map(([emotion, value]) => (value != '0' && EMOTIONS[emotion.toLowerCase()]) && (
            <StyledEmotion>
              {EMOTIONS[emotion.toLowerCase()].icon} {value}
            </StyledEmotion>
          ))}
        </StyledWrapper>
      </>
    );
  }
}

const StyledWrapper = styled.div`
  width: 100%;
  padding: 16px;
  
  svg {
    width: 30px;
    height: 30px;
  }
`;

const Tab = styled.div`
  display: inline-block;
  height: 40px;
  width: 140px;
`;

const StyledEmotion = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 8px;
`;

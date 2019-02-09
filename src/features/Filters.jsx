import React from 'react';
import styled from 'styled-components';
import { Button } from '../ui';
import { EMOTIONS } from '../Emotions';

export function Filters({ selectEmotion }) {
  return (
    <StyledWrapper>
      {
        Object.entries(EMOTIONS).map(([emotion, data]) => (
          <Button
            gradient={data.gradient}
            emoji={data.emoji}
            onClick={() => selectEmotion(emotion)}
          >
            {emotion}
          </Button>
        ))
      }
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  max-width: 900px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 16px;
`;

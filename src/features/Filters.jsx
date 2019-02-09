import React from 'react';
import styled from 'styled-components';
import { Button } from '../ui';
import { EMOTIONS } from '../Emotions';
import { media } from '../ui/media';

export function Filters({ selectEmotion, selected }) {
  return (
    <StyledWrapper>
      {
        Object.entries(EMOTIONS).map(([emotion, data]) => (
          <Button
            {...data}
            active={selected === emotion}
            onClick={() => selectEmotion(emotion)}
          >
            {emotion}
            {data.icon}
          </Button>
        ))
      }
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 16px;
`;

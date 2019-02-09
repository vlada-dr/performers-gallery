import React from 'react';
import styled from 'styled-components';
import { Button } from '../ui';
import { EMOTIONS } from '../Emotions';
import { media } from '../ui/media';

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

export function Filters({ selectEmotion, selected }) {
  return (
    <StyledWrapper>
      {
        chunk(Object.entries(EMOTIONS), 4).map((row, i) => (
          <div key={i}>
            {row.map(([emotion, data]) => (
              <Button
                {...data}
                active={selected === emotion}
                key={emotion}
                onClick={() => selectEmotion(emotion)}
              >
                {emotion}
                {data.icon}
              </Button>
            ))}
          </div>
        ))
      }
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  
  padding-bottom: 60px;
  
  & > div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  }
`;

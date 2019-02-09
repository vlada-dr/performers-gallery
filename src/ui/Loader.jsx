import React from 'react';
import styled from 'styled-components';
import { LoaderIcon } from './icons';

export const Loader = () => (
  <Wrapper>
    <LoaderIcon />
  </Wrapper>
);

const Wrapper = styled.div`
  margin: auto;
  height: 40px;
  padding: 40px;
  background-position: center;
  
  svg {
    height: 100%;
  }
`;

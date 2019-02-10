import React from 'react';
import styled from 'styled-components';
import { LoaderIcon } from './icons';

export const Loader = () => (
  <Wrapper>
    <LoaderIcon />
  </Wrapper>
);

const Wrapper = styled.div`
  margin: 60px auto;
  height: 100px;
  padding: 0 40px;
  background-position: center;
  display: flex;
  justify-content: center;
  
  svg {
    height: 200px;
    z-index: 100;
    margin-left: 100px;
  }
`;

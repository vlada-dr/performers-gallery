import React from 'react';
import styled from 'styled-components';
import { media } from './media';

const Wrapper = styled.header`
  color: #000;
  font-size: 32px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  text-align: center;
  line-height: 64px;
  letter-spacing: 1px;
  padding-top: 16px;
  
  ${media.pho`
    font-size: 18px;
    padding: 16px 0 8px;
    line-height: 32px;
  `}
`;

export const Header = ({ title }) => (
  <Wrapper>
    <div>{title}</div>
  </Wrapper>
);

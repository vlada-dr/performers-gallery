import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  color: #000;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Lato', sans-serif;
  width: 100%;
  height: 64px;
  text-align: center;
  line-height: 64px;
`;

export const Header = ({ title }) => (
  <Wrapper>
    <div>{title}</div>
  </Wrapper>
);

import React from 'react';
import styled from 'styled-components';

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
`;

export const Header = ({ title }) => (
  <Wrapper>
    <div>{title}</div>
  </Wrapper>
);

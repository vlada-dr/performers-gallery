import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  color: #fff;
  font-size: 32px;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  text-align: center;
  line-height: 64px;
  letter-spacing: 2px;
  padding: 50px 0 10px;
`;

export const Header = ({ title }) => (
  <Wrapper>
    <div>{title}</div>
  </Wrapper>
);

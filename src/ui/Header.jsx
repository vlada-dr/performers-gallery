import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  color: #fff;
  font-size: 48px;
  font-family: 'Lobster', cursive;
  width: 100%;
  text-align: center;
  line-height: 64px;
  letter-spacing: 1px;
  padding: 50px 0 10px;
`;

export const Header = ({ title }) => (
  <Wrapper>
    <div>{title}</div>
  </Wrapper>
);

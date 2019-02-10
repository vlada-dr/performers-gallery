import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  color: #fff;
  font-size: 3em;
  font-family: 'Lobster', cursive;
  width: 100%;
  text-align: center;
  line-height: 64px;
  letter-spacing: 1px;
  padding: 2em 0 0.5em;
`;

export const Header = ({ title }) => (
  <Wrapper>
    <div>{title}</div>
  </Wrapper>
);

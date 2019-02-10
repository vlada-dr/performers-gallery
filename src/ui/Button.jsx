import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { media } from './media';

export function Button({ active, shadow, children, onClick, gradient }) {
  return (
    <StyledWrapper
      gradient={gradient}
      onClick={onClick}
      active={active}
      shadow={shadow}
    >
      {children}
    </StyledWrapper>
  );
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
};

const StyledWrapper = styled.div`
  cursor: pointer;
  margin: 0.5em;
  padding: 0.5em 1.5em;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  background-image: linear-gradient(${p => p.gradient});
  box-shadow: 0 8px 24px 0 rgba(0,0,0,.11);
  
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font: 1em 'Roboto';
  
  ${p => p.active && css`
     box-shadow: 0 4px 15px 0 ${p.shadow};
  `}
  
  &:hover {
    background-position: right center;
  }
  
  svg {
    width: 2em;
    height: 2em;
    margin-left: 4px;
    object-fit: contain;
    
    path {
      fill: white;
    }
  }
  
  ${media.pho`
    margin: 4px;
  `}
`;

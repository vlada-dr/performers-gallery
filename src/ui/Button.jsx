import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { media } from './media';

export function Button({ active, shadow, children, onClick, gradient, image }) {
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
  margin: 6px;
  padding: 6px 20px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  background-image: linear-gradient(${p => p.gradient});
  
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font: 16px 'Roboto';
  
  ${p => p.active && css`
     box-shadow: 0 4px 15px 0 ${p.shadow};
  `}
  
  &:hover {
    background-position: right center;
  }
  
  svg {
    width: 30px;
    height: 30px;
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

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export function Button({ emoji, children, onClick, gradient }) {
  return (
    <StyledWrapper
      gradient={gradient}
      onClick={onClick}
    >
      <div>
        <span role="img">
          {emoji}
        </span>
        {children}
      </div>
    </StyledWrapper>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

const StyledWrapper = styled.div`
  cursor: pointer;
  flex: 1 1 auto;
  margin: 10px;
  padding: 15px 20px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
 /* text-shadow: 0px 0px 10px rgba(0,0,0,0.2);*/
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  background-image: linear-gradient(${p => p.gradient});
  
  font: 20px 'Roboto';
  
  &:hover {
    background-position: right center;
  }
`;

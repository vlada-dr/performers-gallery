import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export function Button({ emoji, children, onClick }) {
  return (
    <StyledWrapper onClick={onClick}>
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
  background-image: linear-gradient(to right, #006175 0%, #00a950 100%);
  border-radius: 40px;
  box-sizing: border-box;
  color: #00a84f;
  display: inline-block;
  font: 1.125rem 'Oswald', Arial, sans-serif;
  height: 60px;
  letter-spacing: 1px;
  margin: 4px;
  padding: 3px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 200px;
  z-index: 2;
  
  div {
    align-items: center;
    background: white;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
`;

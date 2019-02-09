import React from 'react';
import styled from 'styled-components';

export class PhotoStream extends React.Component {
  componentDidMount() {
    this.props.fetchPhotos();
  }


  render() {
    const { photos } = this.props;

    return (
      <>
        <StyledWrapper>
          {photos.map(p => (
            <StyledPhoto>
              <img src={p.photoUrl} key={p.id} />
            </StyledPhoto>
          ))}
        </StyledWrapper>
      </>
    );
  }
}

const StyledWrapper = styled.div`
  width: 932px;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  
  & > * {
  margin-bottom: 16px;
    &:not(:nth-child(3n)) {
      margin-right: 16px;
    }
  }
`;

const StyledPhoto = styled.div`
  width: 300px;
  height: 300px;
  
  img { 
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

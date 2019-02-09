import styled from 'styled-components';
import LoaderImage from './LoaderImage.svg';

export const Loader = styled.div`
  background: url('${LoaderImage}') no-repeat;
  margin: auto;
  height: 40px;
  padding: 40px;
  background-position: center;
`;

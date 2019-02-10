import { media } from './media';

const css = String.raw;

export const globalStyles = css`
  html, body {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    line-height: 18px;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
    background-color: #fff;
    background-attachment: fixed;
    color: #333;
    
    @media (-webkit-min-device-pixel-ratio: 2), 
    (min-resolution: 192dpi) { 
      ${media.tab`
        font-size: 32px;
      `}
    }
    
    ${media.pho`
      font-size: 32px;
    `}
  }
 
  a {
    text-decoration: none;
  }
  
  a:visited, a:focus, a:active {
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }
`;

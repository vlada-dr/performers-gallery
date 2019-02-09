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

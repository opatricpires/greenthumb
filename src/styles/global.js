import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,700&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: transparent;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
  }

  html, body, #root{
    min-height: 100%;
  }

  body{
    background-color: #ffffff;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased !important;
  }

  button {
    cursor: pointer;
  }
`;

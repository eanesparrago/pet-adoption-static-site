import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
  html, body, #__next {
    height: 100%;
  }

  html {
    font-size: 16px;
  }
  
  body {
    font-size: 19px;
    font-family: ${theme.font.sansSerif}
  }

  a:focus, button:focus {
    outline: 1px solid black !important;
  }
 
`;

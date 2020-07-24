import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
  html {
    font-size: 16px;
  }
  
  body {
    font-size: 16px;
    font-family: ${theme.font.sansSerif}
  }
`;

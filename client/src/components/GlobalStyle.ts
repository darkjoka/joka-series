import { createGlobalStyle } from "styled-components";
import varela from "../fonts/VarelaRound-Regular.ttf";

export default createGlobalStyle`

  @font-face{
    font-family: "varela";
    src: local("varela"),
    url(${varela}) format("truetype");
    font-weight: normal;
  }
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "varela"
  }
`;

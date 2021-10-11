import { createGlobalStyle } from "styled-components";
import varela from "../fonts/VarelaRound-Regular.ttf";

export default createGlobalStyle`

  @font-face{
    font-family: "varela";
    src: local("varela"),
    url(${varela}) format("truetype");
    font-weight: normal;
    font-display: swap;
  }
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "varela", "Arial Round",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    scrollbar-width: none;

    &::-webkit-scrollbar {
    width: 0;
    height: 0;
    }

  }
`;

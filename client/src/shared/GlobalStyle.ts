import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`


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

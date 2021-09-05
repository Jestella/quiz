import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
      height: 100%;
  }

  * {
      box-sizing: border-box;
      font-family: "Noto Sans", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }

  body {
      margin: 0;
      padding: 0;
      text-align: center;
  }

  .start_btn, .next_btn {
    backgrund-color: green;
    height: 40px;
    width: 100px;
    margin: 30px;
  }

  
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: gray;
  }

  .score {
    color: red;
  }
`;

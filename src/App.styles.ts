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

  .image_container {
    margin: 10px;
    display: grid;
    // grid-template-rows: 3fr 1fr;
  }

  img {
    width: 500px;
    
  }

  .start_btn,.prev_btn, .next_btn {
    backgrund-color: green;
    height: 40px;
    width: 100px;
    margin: 30px;
    justify-self: center;
  }

  
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    margin: 60px 10px 20px;
  }

  p {
    color: gray;
    margin: 10px 0;
  }

  .emoji {
    font-size: 28px;
  }

  .score {
    color: red;
  }
`;

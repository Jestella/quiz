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
      background-image: linear-gradient( 179.4deg,  rgba(253,240,233,1) 2.2%, rgba(255,194,203,1) 96.2% );

  .image_container {
    margin: 10px;
    display: grid;
    // grid-template-rows: 3fr 1fr;
  }

  img {
    width: 500px;
    
  }

  .start_btn,
  .next_btn {
    height: 80px;
    width: 80px;
    margin: 40px;
    font-weight: 600;
    font-size: 16px;
    justify-self: center;
    border: 1px solid #FF7997;
    border-radius: 50%;
    color: #FF7997;
    background-color: #FDE5E1;
    box-shadow: 5px 3px #FF7997;
  }

  .start_btn:hover,
  .next_btn:hover {
    background-color: #F0D9FF;
  }

  .result_container {
    display: grid;
    grid-template-rows: 0.5fr 1fr 0.5fr;
  }

  .result_image {
    width: 300px;
  }
  
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    margin: 80px 10px 10px;
    font-size: 40px;
    // color: #fe8f8f;
    font-weight: 300;
    background-image: radial-gradient(
      circle 685.3px at 47.8% 55.1%,
      rgba(255, 99, 152, 1) 0%,
      rgba(251, 213, 149, 1) 90.1%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .span_main {
    color: black;
    background-color: #fed6d8;
  }

  > p {
    color: gray;
    margin: 10px 0 40px;
  }

  .score {
    color: red;
  }
`;

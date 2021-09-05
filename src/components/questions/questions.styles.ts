import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: lightpink;
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.6;
  }

  button {
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 20px 0 10px;
    background: ${({ correct, userClicked }) =>
      correct ? "blue" : !correct && userClicked ? "red" : "gray"};
  }
`;

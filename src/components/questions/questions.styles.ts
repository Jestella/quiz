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
    opacity: 0.7;
  }

  button {
    cursor: pointer;
    width: 120px;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct ? "blue" : !correct && userClicked ? "red" : "gray"};
  }
`;

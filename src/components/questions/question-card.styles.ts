import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fef1e6;
  width: 500px;
  border: 1px solid #fff;
  padding: 20px;
  margin-top: 10px;
  box-shadow: 0px 5px 5px lightgray;

  p {
    font-size: 1rem;
  }

  .question_number {
    font-size: 14px;
  }

  .question {
    font-weight: 600;
    font-size: 20px;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  .answer_button {
    cursor: pointer;
    user-select: none;
    width: 100%;
    height: 30px;
    margin: 20px 0 10px;
    background: ${({ correct, userClicked }) =>
      correct ? "#FF7997" : !correct && userClicked ? "gray" : "#F3D5C0"};
    border: 1px solid #fff;
    border-radius: 20px;
    font-size: 16px;
  }
`;

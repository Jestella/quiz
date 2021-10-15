import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fef1e6;
  width: 500px;
  border: 1px solid #fff;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);

  p {
    font-size: 1rem;
  }
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
    user-select: none;
    width: 100%;
    height: 30px;
    margin: 20px 0 10px;
    background: ${({ correct, userClicked }) =>
      correct ? "#FF7997" : !correct && userClicked ? "red" : "#F3D5C0"};
    border: 1px solid #fff;
  }
`;

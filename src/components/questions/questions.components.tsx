import React from "react";
import { AnswerObject } from "../../App";
import { Wrapper, ButtonWrapper } from "./questions.styles";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNo: number;
  questionTotal: number;
};

const Questions: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNo,
  questionTotal,
}) => (
  <Wrapper>
    <p className="questionNumber">
      Question: {questionNo} / {questionTotal}
    </p>
    <p>question: {question}</p>
    <div>
      {answers.map((answer) => (
        <ButtonWrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button
            disabled={userAnswer ? true : false}
            value={answer}
            onClick={callback}
          />

          <p>{answer}</p>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);

export default Questions;

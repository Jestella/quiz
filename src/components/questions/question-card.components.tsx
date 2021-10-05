import React, { Component } from "react";

import { AnswerObject } from "../../App";
import { Wrapper, ButtonWrapper } from "./questions.styles";

export type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNo: number;
  totalQuestions: number;
};

export const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNo,
  totalQuestions,
}) => (
  <div>
    <p className="number">
      Questions: {questionNo} / {totalQuestions}
    </p>
    <h1>{question}</h1>
    <div>
      {answers.map((answer) => (
        <ButtonWrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <div key={answer}></div>
          <button
            disabled={userAnswer ? true : false} // or !!userAnswer
            value={answers}
            onClick={callback}
          ></button>
        </ButtonWrapper>
      ))}
      <p>{answers}</p>
    </div>
  </div>
);

export const QuestionBox = () => {};

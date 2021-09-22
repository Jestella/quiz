import React, { Component } from "react";

import QuestionList from "./question-list";
import { Props } from "../../App";
import { Wrapper, ButtonWrapper } from "./questions.styles";

export type Props = {
  question: string;
  answers: string[];
  correct: string;
  userAnswer: string;
  questionNo: number;
  totalQuestions: number;
};

export const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  correct,
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
      <button disabled={userAnswer} value={answer} onClick={callback} />
      <p>{answer}</p>
    </div>
  </div>
);

export const QuestionBox = () => {
  return QuestionList.map((question) => ({
    ...question,
    answers: [...question.answers],
  }));
};

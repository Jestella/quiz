import { render } from "@testing-library/react";
import React from "react";
import { isConstructorDeclaration } from "typescript";

type format = {
  question: string;
  answer: string[];
  callback: any;
  userAnswer: string;
  questionNo: number;
  questionTotal: number;
};

class Questions extends React.Component {
  constructor() {
    super();

    this.state = {
      question,
      answer,
      callback,
      userAnswer,
      questionNo,
      questionTotal,
    };
  }

  render() {
    return (
      <div>
        <h1>{question}</h1>
      </div>
    );
  }
}

export default Questions;

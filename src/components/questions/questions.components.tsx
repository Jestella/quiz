import { render } from "@testing-library/react";
import React from "react";
import { isConstructorDeclaration } from "typescript";

type format = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNo: number;
  questionTotal: number;
};

class Questions extends React.Component {
  constructor() {
    super(props);

    this.state = {
      question,
      answers,
      callback,
      userAnswer,
      questionNo,
      questionTotal,
    };
  }

  render() {
    return (
      <div>
        <p className="questionNumber">
          Question: {questionNo} / {questionTotal}
        </p>
        <p>question: {question}</p>
        <div>
          {answers.map((answer) => (
            <div>
              <button disabled={userAnswer} onClick={callback} />
              <p>{answer}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Questions;

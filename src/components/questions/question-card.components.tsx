import React from "react";

import { AnswerObject } from "../../App";
import { Wrapper, ButtonWrapper } from "./question-card.styles";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNo: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNo,
  totalQuestions,
}) => (
  <Wrapper>
    <p className="question_number">
      Questions: {questionNo} / {totalQuestions}
    </p>
    <p className="question">{question}</p>

    <div>
      {answers.map((answer) => (
        <ButtonWrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <div key={answer}></div>
          <button
            className="answer_button"
            disabled={userAnswer ? true : false} // or !!userAnswer
            value={answer}
            onClick={callback}
          >
            {/* <span dangerouslySetInnerHTML={{ __html: answer }} /> */}
            <span>{answer}</span>
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);

export default QuestionCard;

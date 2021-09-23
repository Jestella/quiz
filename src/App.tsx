import React, { useState } from "react";

import {QuestionCard} from "./components/questions/question-card.components";
import { Props } from "./components/questions/question-card.components";

import { GlobalStyle, Wrapper } from "./App.styles";

//images
import readyImage from "./images/ready.png";
import greatImage from "./images/great.png";
import notbadImage from "./images/notbad.png";
import letmethinkImage from "./images/letmethink.png";
import badImage from "./images/bad.png";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: string;
};

const totalQuestions = 5;

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [quizOver, setQuizOver] = useState(true);

  const startQuiz = async () => {
    setQuizOver(false);

    const newQuestions = startQuiz; // fix this part!

    setQuestions(newQuestions); // fix this part!
    setScore(0);
    setUserAnswer([]);
    setCurrentNumber(0);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!quizOver) {
      // User answer
      const answer = e.currentTarget.value;
      // Check if the answer is correct
      const correct = questions[currentNumber].correct === answer;
      // Add score
      if (correct) setScore((prev) => prev + 1);
      // Save answer in the array for user answers
      const answerObject = {
        question: questions[currentNumber].question,
        answer,
        correct: questions[currentNumber].correct,
      };
      setUserAnswer((prev) => [...prev, answerObject]);
    }
  };


  const prevQuestion = () => {
    const prevQuestion = currentNumber - 1;
  };

  const nextQuestion = () => {
    const nextQuestion = currentNumber + 1;
    if (nextQuestion === totalQuestions) {
      setQuizOver(true);
    } else {
      setCurrentNumber(nextQuestion);
    }
  };


  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>You can sit with Stella.</h1>
        <p>
          How much do you know about me?
          <br />
          Let's see if you are ready to work with me.
        </p>
        <p className="emoji">🧐</p>

        {quizOver ? || userAnswer.length === totalQuestions ? (
          <div className="image_container">
            <img src={readyImage} className="ready_image" />
            <button className="start_btn" onClick={startQuiz}>
              START
            </button></div> ) : null} {!quizOver ? <p className="score">Your score: </p> : null}
     

        {userAnswer.length === totalQuestions ? (
          <div className="image_container">
            <img src={greatImage} className="great_image" />

            <button className="start_btn" onClick={startQuiz}>
              RESTART
            </button>
          </div>
        ) : null}
        {!quizOver ? (
          <QuestionCard
            questionNo={currentNumber + 1} // question Number starts from 1
            questionTotal={totalQuestions}
            question={questions[currentNumber].question}
            answers={questions[currentNumber].answers}
            userAnswer={userAnswer ? userAnswer[currentNumber] : undefined}
            callback={checkAnswer}
          />
        ) : null}
        {!quizOver &&
        userAnswer.length === currentNumber + 1 &&
        currentNumber !== totalQuestions - 1 ? (
          <div>
            <button className="prev_btn" onClick={prevQuestion}>
              PREV
            </button>
            <button className="next_btn" onClick={nextQuestion}>
              NEXT
            </button>
          </div>
        ) : null}
        {!quizOver ? <p className="score">SCORE: {score * 20}%</p> : null}
      </Wrapper>
    </>
  );
};

export default App;

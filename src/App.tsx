import React, { useState } from "react";

import QuestionCard from "./components/questions/question-card.components";
import { Props } from "./components/questions/question-card.components";

import { GlobalStyle, Wrapper } from "./App.styles";

//images
import readyImage from "./images/ready.png";
import greatImage from "./images/great.png";
import notbadImage from "./images/notbad.png";
import letmethinkImage from "./images/letmethink.png";
import badImage from "./images/bad.png";

type AnswerObject = {
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
    if (!gameOver) {
      // User answer
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswer((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === totalQuestions) {
      setQuizOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  const prevQuestion = () => {
    const prevQuestion = number - 1;
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
            <button className="start_btn" onClick={startQiz}>
              START
            </button></div> ) : null} {!quizOver ? <p className="score">Your score: </p> : null}
     

        {userAnswers.length === totalQuestions ? (
          <div className="image_container">
            <img src={greatImage} className="great_image" />

            <button className="start_btn" onClick={startQuiz}>
              RESTART
            </button>
          </div>
        ) : null}
        {!quizOver ? (
          <QuestionCard
            questionNo={number + 1} // question Number starts from 1
            questionTotal={totalQuestions}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        ) : null}
        {!quizOver &&
        userAnswers.length === number + 1 &&
        number !== totalQuestions - 1 ? (
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

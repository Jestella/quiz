import React, { useState } from "react";
import { fetchQuestions } from "./components/API";

import Questions from "./components/questions/questions.components";
import { QuestionState, Difficulty } from "./components/API";

import { GlobalStyle, Wrapper } from "./App.styles";

//images
import readyImage from "./images/ready.png";
import greatImage from "./images/great.png";
import notbadImage from "./images/notbad.png";
import letmethink from "./images/letmething.png";
import badImage from "./images/bad.png";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const askQuestion = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const answerQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
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
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
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

        <div className="image_container">
          <img src={readyImage} className="ready_image" />
        </div>

        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start_btn" onClick={askQuestion}>
            START
          </button>
        ) : null}
        {loading ? <p>loading questions now - 🦦 </p> : null}
        {!loading && !gameOver ? (
          <Questions
            questionNo={number + 1}
            questionTotal={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={answerQuestion}
          />
        ) : null}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next_btn" onClick={nextQuestion}>
            NEXT
          </button>
        ) : null}
        {!gameOver ? <p className="score">SCORE: {score * 10}%</p> : null}
      </Wrapper>
    </>
  );
};

export default App;

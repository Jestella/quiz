import React, { useState } from "react";
import logo from "./logo.svg";

import Questions from "./components/questions/questions.components";

import "./App.css";

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const askQuestion = async () => {};

  const answerQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => [];

  return (
    <div className="App">
      <h1>Hello, Welcome to Quizzy.</h1>
      <button className="startQuiz" onClick={askQuestion}>
        START
      </button>
      <p className="score">SCORE</p>
      <p>Loading Questions</p>
      <Questions
        questionNo={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
      />
      <button className="nextQuestion_btn" onClick={nextQuestion}>
        NEXT
      </button>
    </div>
  );
}

export default App;

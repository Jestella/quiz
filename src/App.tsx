import React from "react";
import logo from "./logo.svg";

import Questions from "./components/questions/questions.components";

import "./App.css";

function App() {
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
      <Questions />
      <button className="nextQuestion_btn" onClick={nextQuestion}>
        NEXT
      </button>
    </div>
  );
}

export default App;

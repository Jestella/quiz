import React, { useState, Fragment } from "react";
import { fetchQuizQuestions, QuestionState } from "./components/questions/API";

import QuestionCard from "./components/questions/question-card.components";
import { GlobalStyle, Wrapper } from "./App.styles";

import { Results } from "./components/results/results";

//images
import readyImage from "./images/ready.png";
import greatImage from "./images/great.png";
import notbadImage from "./images/notbad.png";
import letmethinkImage from "./images/letmethink.png";
import badImage from "./images/bad.png";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 5;

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [quizOver, setQuizOver] = useState(true);

  const startQuiz = async () => {
    setLoading(true);
    setQuizOver(false);

    const newQuestions = await fetchQuizQuestions();

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswer([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: any) => {
    if (!quizOver) {
      // User answer
      const answer = e.currentTarget.value;
      // Check if the answer is correct
      const correct = questions[number].correct_answer === answer;
      // Add score
      if (correct) setScore((prev) => prev + 1);
      // Save answer in the array for user answers
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
    const nextQ = number + 1;

    if (nextQ === TOTAL_QUESTIONS) {
      setQuizOver(true);
    } else {
      setNumber(nextQ);
    }
  };

  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper>
        <h1>You can work with Stella</h1>
        <p>
          Are you here because you want to work with her?
          <br />
          Play this <span className="span_main">Get-to-Know-Her Quiz</span>{" "}
          first :)
        </p>
        {quizOver ? (
          <div className="image_container">
            <img src={readyImage} className="ready_image" />
            <button className="start_btn" onClick={startQuiz}>
              START
            </button>
          </div>
        ) : null}
        {loading ? <p>Loding Questions... 💣</p> : null}

        {!loading && !quizOver ? (
          <QuestionCard
            questionNo={number + 1} // question Number starts from 1
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswer ? userAnswer[number] : undefined}
            callback={checkAnswer}
          />
        ) : null}

        {!quizOver &&
        !loading &&
        userAnswer.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <div>
            <button className="next_btn" onClick={nextQuestion}>
              NEXT
            </button>
          </div>
        ) : null}
        {userAnswer.length === TOTAL_QUESTIONS ? (
          <div className="image_container">
            <p className="score">SCORE: {score}%</p>
            <h2>ADD RESULTS IMAGE HERE!!!!!!</h2>
            <div>{Results}</div>
            <button className="start_btn" onClick={startQuiz}>
              RESTART
            </button>
          </div>
        ) : null}
      </Wrapper>
    </Fragment>
  );
};

export default App;

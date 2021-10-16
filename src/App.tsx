import React, { useState, Fragment } from "react";
import { fetchQuizQuestions, QuestionState } from "./components/questions/API";

import QuestionCard from "./components/questions/question-card.components";
import { GlobalStyle, Wrapper } from "./App.styles";

//images
import readyImage from "./images/ready.png";
import greatImage from "./images/great.png";
import notbadImage from "./images/notbad.png";

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
        <h1 className="title_1">You can work with Stella</h1>
        <h3 className="title_2">
          Are you here because you want to work with her?
          <br />
          Play this <span className="span_main">Get-to-Know-Her Quiz</span>{" "}
          first :)
        </h3>
        {quizOver ? ( // main page
          <div className="image_container">
            <img src={readyImage} className="ready_image" />
            <button className="start_btn" onClick={startQuiz}>
              START
            </button>
          </div>
        ) : null}
        {loading ? <p>Loading Questions... 💣</p> : null}

        {!loading && !quizOver ? ( // quiz page
          <QuestionCard
            questionNo={number + 1} // question Number starts from 1
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswer ? userAnswer[number] : undefined}
            callback={checkAnswer}
          />
        ) : null}

        {!quizOver && // next quiz until the last page
        !loading &&
        userAnswer.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next_btn" onClick={nextQuestion}>
            NEXT
          </button>
        ) : null}

        {userAnswer.length === TOTAL_QUESTIONS ? ( // quiz ends? show score & images
          <div className="result_container">
            <h2>
              YOUR SCORE : <span className="score">{score * 20} </span>{" "}
            </h2>
            {score * 20 > 50 ? (
              <img src={greatImage} className="result_image" />
            ) : (
              <img src={notbadImage} className="result_image" />
            )}

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

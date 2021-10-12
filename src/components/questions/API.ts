export type Question = {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type QuestionState = Question & { answers: string[] };

const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);

export const fetchQuizQuestions = async (): Promise<QuestionState[]> => {
  const endpoint = `https://s-quiz-api.herokuapp.com/quiz/`;
  const data = await (await fetch(endpoint)).json();
  return data.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};

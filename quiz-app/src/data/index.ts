import { shuffleArr } from "../helpers";
import { IQuestion } from "../types";
import data from "./questions.json";

export const totalQuestions = data.length;

const cleanedData = data.map((item) => {
  const correct_answer = decodeURIComponent(item.correct_answer);
  const incorrect_answers = item.incorrect_answers.map((i) =>
    decodeURIComponent(i),
  );
  return {
    category: decodeURIComponent(item.category),
    type: item.type,
    difficulty: item.difficulty,
    question: decodeURIComponent(item.question),
    correct_answer,
    incorrect_answers,
    // shuffling correct and incorrect choices
    choices: shuffleArr([...incorrect_answers, correct_answer]),
  };
});

export const questionsData = cleanedData as IQuestion[];

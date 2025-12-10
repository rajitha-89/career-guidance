import React, { useState } from 'react';
import CareerQuiz from './CareerQuiz';
import CareerQuizResult from './CareerQuizResult';

const CareerQuizPage = () => {
  const [quizResult, setQuizResult] = useState(null);

  const handleQuizSubmit = (answers) => {
    const result = answers.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }, {});

    // Determine the most frequent answer
    const mostFrequentAnswer = Object.keys(result).reduce((a, b) => result[a] > result[b] ? a : b);
    setQuizResult(mostFrequentAnswer);
  };

  return (
    <div className="quiz-page">
      {quizResult ? (
        <CareerQuizResult result={quizResult} />
      ) : (
        <CareerQuiz onSubmit={handleQuizSubmit} />
      )}
    </div>
  );
};

export default CareerQuizPage;

import React, { useState } from 'react';

const Quiz = () => {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Quiz submitted! Your answers: ${JSON.stringify(answers)}`);
    // In a real app, we would send this data to the backend here.
  };

  return (
    <div className="quiz-container">
      <h1>Career Quiz</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>What is your preferred work environment?</label>
          <select name="question1" value={answers.question1} onChange={handleChange}>
            <option value="">Select</option>
            <option value="office">Office</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>

        <div>
          <label>Which of these skills interest you the most?</label>
          <select name="question2" value={answers.question2} onChange={handleChange}>
            <option value="">Select</option>
            <option value="programming">Programming</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>

        <div>
          <label>What is your long-term career goal?</label>
          <select name="question3" value={answers.question3} onChange={handleChange}>
            <option value="">Select</option>
            <option value="leadership">Leadership Role</option>
            <option value="specialist">Specialist/Expert</option>
            <option value="entrepreneur">Entrepreneur</option>
          </select>
        </div>

        <button type="submit">Submit Quiz</button>
      </form>
    </div>
  );
};

export default Quiz;

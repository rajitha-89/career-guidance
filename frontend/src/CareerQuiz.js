import React, { useState } from 'react';
import './CareerQuiz.css';
import BackButton from './BackButton';

// Questions for the Career Quiz
const questions = [
  {
    question: "What type of work environment excites you the most?",
    options: ["Tech companies or finance industry", "Healthcare or social services", "Creative studios, art galleries, or media companies", "Business meetings, consulting, and entrepreneurship"],
    category: ['A', 'B', 'C', 'D']
  },
  {
    question: "What do you enjoy the most?",
    options: ["Working with numbers, data, and problem-solving", "Helping and working closely with people", "Designing, creating, and innovating", "Analyzing problems, making decisions, and leading projects"],
    category: ['A', 'B', 'C', 'D']
  },
  {
    question: "Which skills are you most interested in developing?",
    options: ["Technical skills such as programming, data analysis, or engineering", "People skills, including communication, counseling, and empathy", "Creative skills like design, writing, and video production", "Leadership, decision-making, and project management skills"],
    category: ['A', 'B', 'C', 'D']
  },
  {
    question: "How do you prefer to work?",
    options: ["In a structured, detail-oriented environment", "As part of a team, helping and supporting others", "In an open, creative, and flexible environment", "Independently, with opportunities to make important decisions"],
    category: ['A', 'B', 'C', 'D']
  },
  {
    question: "What is your approach to problem-solving?",
    options: ["Analytical and data-driven, with a focus on finding precise solutions", "Understanding the needs of others and providing practical support", "Brainstorming, thinking outside the box, and experimenting", "Considering all possible outcomes and choosing the best course of action"],
    category: ['A', 'B', 'C', 'D']
  },
  {
    question: "Which of these interests you the most?",
    options: ["Software development, systems analysis, or data science", "Healthcare, social work, or therapy", "Art, design, writing, or media production", "Business development, marketing, or entrepreneurship"],
    category: ['A', 'B', 'C', 'D']
  },
  {
    question: "What motivates you the most in your career?",
    options: ["Innovation, technological advancements, and problem-solving", "Making a direct impact on people's lives and well-being", "Expressing creativity and contributing to artistic fields", "Leading teams, managing projects, and achieving goals"],
    category: ['A', 'B', 'C', 'D']
  },
];

// Resources based on career recommendations
const resources = {
  A: [
    "Learn Python for Data Science (FreeCodeCamp)",
    "Build Your Own Website (Codecademy)",
    "Introduction to Machine Learning (Coursera)",
    "Full Stack Web Development Bootcamp (Udemy)"
  ],
  B: [
    "Becoming a Healthcare Provider (Coursera)",
    "Mental Health First Aid (National Council)",
    "Social Work Basics (edX)",
    "Therapists' Guide to Treatment (Psychology Today)"
  ],
  C: [
    "Creative Coding: A Guide to Art and Technology (Khan Academy)",
    "Introduction to Graphic Design (Skillshare)",
    "Writing and Storytelling (MasterClass)",
    "Photography Basics (Udemy)"
  ],
  D: [
    "Starting Your Business (SBA.gov)",
    "Effective Leadership Skills (LinkedIn Learning)",
    "Marketing Strategy Essentials (Coursera)",
    "Finance for Entrepreneurs (edX)"
  ]
};

function CareerQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [career, setCareer] = useState('');
  const [careerResources, setCareerResources] = useState([]);
  const [showResources, setShowResources] = useState(false);

  const handleAnswer = (option) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      const categoryCount = { A: 0, B: 0, C: 0, D: 0 };

      newAnswers.forEach((ans) => {
        const category = getCategoryForAnswer(ans);
        if (category) {
          categoryCount[category]++;
        }
      });

      const topCategory = Object.entries(categoryCount).sort((a, b) => b[1] - a[1])[0][0];

      let recommendedCareer = '';
      if (topCategory === 'A') recommendedCareer = 'Technical Careers (Engineer, Developer, Data Scientist)';
      else if (topCategory === 'B') recommendedCareer = 'Healthcare & Social Services (Doctor, Counselor, Therapist)';
      else if (topCategory === 'C') recommendedCareer = 'Creative Careers (Designer, Writer, Artist)';
      else if (topCategory === 'D') recommendedCareer = 'Business Careers (Entrepreneur, Manager, Consultant)';

      setCareer(recommendedCareer);
      setCareerResources(resources[topCategory]);
      setShowResult(true);
    }
  };

  const handleRetake = () => {
    setCurrentQ(0);
    setAnswers([]);
    setShowResult(false);
    setCareer('');
    setCareerResources([]);
    setShowResources(false);
  };

  const getCategoryForAnswer = (answer) => {
    const question = questions[currentQ];
    const index = question.options.indexOf(answer);
    return question.category[index];
  };

  const handleShowResources = () => {
    setShowResources(true);
  };

  const progress = ((currentQ + 1) / questions.length) * 100;

  return (
    <div className="quiz-container">
    <BackButton />
      {showResult ? (
        <div  className="result fade-in">
          <h2>Thank You for Completing the Quiz!</h2>
          <p>Based on your answers, a suitable career path for you could be:</p>
          <h3 className="career">{career}</h3>
          <p>Would you like to explore resources to help you with this career?</p>
          <button className="option-btn" onClick={handleShowResources}>
            Yes, Show Resources
          </button>
          <button className="option-btn" onClick={handleRetake}>
            Retake Quiz
          </button>
          {showResources && (
            <div>
              <h4>Here are some resources to help you get started:</h4>
              <ul className="resources-list">
                {careerResources.map((resource, index) => (
                  <li key={index}>{resource}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="question-box fade-in">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          <h4>Question {currentQ + 1} of {questions.length}</h4>
          <h5>{questions[currentQ].question}</h5>
          <div className="options">
            {questions[currentQ].options.map((option, i) => (
              <button key={i} onClick={() => handleAnswer(option)} className="option-btn">
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CareerQuiz;

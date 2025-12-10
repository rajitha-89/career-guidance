import React from 'react';

const CareerQuizResult = ({ result }) => {
  // Sample resources based on career type
  const resources = {
    tech: [
      { name: 'Codecademy - Learn to Code', link: 'https://www.codecademy.com/' },
      { name: 'freeCodeCamp', link: 'https://www.freecodecamp.org/' },
      { name: 'Coursera - Data Science', link: 'https://www.coursera.org/browse/data-science' }
    ],
    healthcare: [
      { name: 'Coursera - Healthcare Courses', link: 'https://www.coursera.org/browse/health' },
      { name: 'MedEdPORTAL', link: 'https://www.mededportal.org/' },
      { name: 'LinkedIn Learning - Healthcare', link: 'https://www.linkedin.com/learning/topics/healthcare' }
    ],
    creative: [
      { name: 'Skillshare - Creative Courses', link: 'https://www.skillshare.com' },
      { name: 'Udemy - Creative Arts', link: 'https://www.udemy.com/courses/design/' },
      { name: 'Behance - Showcase and Discover Creative Work', link: 'https://www.behance.net/' }
    ],
    business: [
      { name: 'Harvard Business Review', link: 'https://hbr.org/' },
      { name: 'Coursera - Business Courses', link: 'https://www.coursera.org/browse/business' },
      { name: 'LinkedIn Learning - Business Skills', link: 'https://www.linkedin.com/learning/topics/business' }
    ]
  };

  // Determine the career path based on the result
  const getCareerPath = (result) => {
    switch (result) {
      case 'A':
        return 'Tech Careers';
      case 'B':
        return 'Healthcare & Social Services';
      case 'C':
        return 'Creative Careers';
      case 'D':
        return 'Business Careers';
      default:
        return 'Unknown';
    }
  };

  // Get the corresponding resources
  const careerPath = getCareerPath(result);
  const careerResources = resources[careerPath.toLowerCase().replace(/\s+/g, '')] || [];

  return (
    <div className="result-container">
      <h2>Your Career Path: {careerPath}</h2>
      <p>Based on your responses, we recommend the following career path:</p>
      
      <h3>Recommended Learning Resources:</h3>
      <ul>
        {careerResources.length > 0 ? (
          careerResources.map((resource, index) => (
            <li key={index}>
              <a href={resource.link} target="_blank" rel="noopener noreferrer">{resource.name}</a>
            </li>
          ))
        ) : (
          <p>No resources available for your career path.</p>
        )}
      </ul>

      <button onClick={() => window.location.reload()}>Retake Quiz</button>
    </div>
  );
};

export default CareerQuizResult;

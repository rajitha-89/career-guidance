import React from 'react';
import './Resources.css';
import { Link } from 'react-router-dom';

function Resources() {
  const groupedResources = {
    " Coding & Tech": [
      { title: " FreeCodeCamp", link: "https://www.freecodecamp.org/" },
      { title: " Coursera (Programming)", link: "https://www.coursera.org/" },
      { title: " edX (Computer Science)", link: "https://www.edx.org/" },
    ],
    "Business & Entrepreneurship": [
      { title: " LinkedIn Learning", link: "https://www.linkedin.com/learning/" },
      { title: " Coursera (Business Courses)", link: "https://www.coursera.org/" },
    ],
    "Creative & Design": [
      { title: " Canva Design School", link: "https://designschool.canva.com/" },
      { title: " Skillshare (Creative)", link: "https://www.skillshare.com/" },
    ],
    "General Learning": [
      { title: " Khan Academy", link: "https://www.khanacademy.org/" },
      { title: "Udemy", link: "https://www.udemy.com/" },
    ],
  };

  return (
    <div className="resources-container">
      <h2 className="text-center mb-4"> Recommended Resources</h2>

      {Object.entries(groupedResources).map(([category, resources], index) => (
        <div key={index} className="mb-5">
          <h3 className="category-heading">{category}</h3>
          <div className="row">
            {resources.map((resource, idx) => (
              <div key={idx} className="col-md-4 mb-4">
                <div className="card resource-card">
                  <div className="card-body text-center">
                    <h5 className="card-title">{resource.title}</h5>
                    <a href={resource.link} className="btn btn-primary mt-2" target="_blank" rel="noopener noreferrer">
                      Visit
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="text-center mt-4">
        <Link to="/dashboard" className="btn btn-secondary">⬅ Back to Dashboard</Link>
      </div>
    </div>
  );
}

export default Resources;



import React, { useState } from 'react';
import './SkillTracker.css';

function SkillTracker() {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleDeleteSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  return (
    <div className="skill-tracker-background">
    <div className="container my-5" >
        <div className="skill-tracker-card">
      <div className="card shadow-sm p-4">
        <h2 className="text-center mb-4">Skill Tracker</h2>
        <form onSubmit={handleAddSkill} className="d-flex mb-3">
          <input
            type="text"
            className="form-control me-2"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Enter a new skill"
          />
          <button
  className="btn btn-primary btn-sm"
  style={{ width: '200px', fontSize: '20px', marginLeft: '8px' }}
  onClick={handleAddSkill}
>
  Add
</button>


        </form>

        <ul className="list-group">
          {skills.map((skill, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {skill}
              <button 
  className="btn btn-danger btn-sm px-1 py-1" 
  style={{ width: '170px', fontSize: '20px' }}
  onClick={() => handleDeleteSkill(index)}
>
  Delete
</button>

            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SkillTracker;

import React, { useState } from 'react';
import './GoalTracker.css';

function GoalTracker() {
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const addGoal = () => {
    if (goal) {
      setGoals([
        ...goals,
        { text: goal, completed: false }
      ]);
      setGoal('');
    }
  };

  const deleteGoal = (index) => {
    const updatedGoals = goals.filter((_, i) => i !== index);
    setGoals(updatedGoals);
  };

  const markAsCompleted = (index) => {
    const updatedGoals = [...goals];
    updatedGoals[index].completed = true;
    setGoals(updatedGoals);
  };

  return (
    <div className="goal-tracker-container">
  <div className="container mt-4 goal-card">
      <h2>Goal Tracker</h2>
      <div className="goal-input-container mt-3 d-flex align-items-center">
  <input
    type="text"
    className="form-control me-2 flex-grow-1"
    value={goal}
    onChange={(e) => setGoal(e.target.value)}
    placeholder="Enter your goal"
  />
  <button
    className="btn btn-primary goal-button"
    onClick={addGoal}
  >
    Add Goal
  </button>


</div>


      <ul className="list-group mt-4">
        {goals.map((goal, index) => (
          <li
            key={index}
            className={`list-group-item d-flex justify-content-between align-items-center ${goal.completed ? 'completed' : ''}`}
          >
            <div className={goal.completed ? 'completed-goal' : ''}>
  {goal.text}

              <span
                className={`badge ms-3 ${goal.completed ? 'bg-success' : 'bg-warning text-dark'}`}
              >
                {goal.completed ? 'Completed ✅' : 'Pending ⏳'}
              </span>
            </div>
            <div>
              <button
                className="btn btn-success btn-sm me-2"
                onClick={() => markAsCompleted(index)}
                disabled={goal.completed}
              >
                 Mark as Completed
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteGoal(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default GoalTracker;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import CareerQuiz from './CareerQuiz';
import Resources from './Resources';
import SkillTracker from './SkillTracker';
import GoalTracker from './GoalTracker';
import MentorQA from './MentorQA';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import ForgotPassword from './ForgotPassword';



function App() {
  return (
    
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home/>} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz" element={<CareerQuiz />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/skills" element={<SkillTracker />} />
        <Route path="/goals" element={<GoalTracker />} />
        <Route path="/mentor" element={<MentorQA />} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        
        
      </Routes>
    </Router>
    
    

   

  );
}

export default App;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom'; // instead of Link

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Import custom CSS for styling

function Home() {
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/home">
      Career Guide
    </NavLink>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink 
            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} 
            to="/home"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} 
            to="/login"
          >
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} 
            to="/register"
          >
            Register
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>


      {/* Home Content */}
      <div className="home-container">
        <div className="overlay">
          <div className="container text-center home-content">
            <h1 className="display-4 text-white">
              <span role="img" aria-label="graduation cap">🎓</span> Career Guidance Platform
            </h1>
            <p className="lead mt-3 text-white">
              Empower your career decisions with personalized tools and expert insights.
            </p>
            <button className="btn btn-primary btn-lg mt-4 go-to-dashboard-btn" onClick={handleGoToDashboard}>
  Go to Dashboard
</button>


            {/* About Section */}
            <section className="mt-5 text-white about-section">
              <div className="container">
                <h2>About Career Guidance</h2>
                <p className="mt-3">
                  Our platform helps students and professionals discover the right career path
                  through quizzes, skill trackers, goal setting, and expert mentorship. Start your journey today!
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

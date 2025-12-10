import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(null); // true/false for message color
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        setIsSuccess(true);
        setMessage('Login successful! Redirecting...');
        setTimeout(() => navigate('/home'), 1500);
      } else {
        setIsSuccess(false);
        setMessage(data.error || 'Login failed');
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        {message && (
          <p style={{ color: isSuccess ? 'green' : 'red' }}>{message}</p>
        )}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <div className="mt-3 text-center">
          <Link to="/register" className="btn-link">Don't have an account? Register</Link><br />
          <Link to="/forgotpassword" className="btn-link">Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;




import React, { useState } from 'react';
import './ForgotPassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(null);

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/forgotpassword', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setMessage('Password reset link sent to your registered email!');
      } else {
        setIsSuccess(false);
        setMessage('Failed to send reset link. Please try again.');
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage('Failed to send reset link. Please try again.');
    }
  };

  return (
    <div className="forgot-container">
      <div className="forgot-card">
        <h2>Forgot Password</h2>
        {message && (
          <p style={{ color: isSuccess ? 'green' : 'red' }}>{message}</p>
        )}
        <form onSubmit={handleForgotPassword}>
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;

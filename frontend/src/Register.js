import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail]     = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    });

    const data = await response.json();

    if (response.ok) {
      setMessage('✅ Registration successfull');
      setTimeout(() => {
        navigate('/home'); // Navigate directly to the Home page after registration

      }, 1500);
    } else {
      setMessage(data.error || 'Something went wrong');
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          <button type="submit">Register</button>
        </form>
        <p className="text-center mt-3">
          Already have an account? <Link to="/">Login</Link>
        </p>
        {message && <p className="text-success mt-2">{message}</p>}
      </div>
    </div>
  );
}

export default Register;

// src/components/BackButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons'; // using Bootstrap icon

function BackButton() {
  const navigate = useNavigate();

  return (
    <div style={{ marginBottom: '20px' }}>
      <Button variant="outline-primary" onClick={() => navigate('/dashboard')}>
        <ArrowLeft /> Back to Dashboard
      </Button>
    </div>
  );
}

export default BackButton;

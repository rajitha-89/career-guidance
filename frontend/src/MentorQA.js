import React, { useState } from 'react';
import './MentorQA.css';  // Use the regular CSS file

function MentorQA() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [answers, setAnswers] = useState({});
  const [submittedAnswers, setSubmittedAnswers] = useState({});
  const [editingAnswerIndex, setEditingAnswerIndex] = useState(null); // To track which answer is being edited
  const [successIndex, setSuccessIndex] = useState(null); // For success message

  const handleQuestionSubmit = () => {
    if (newQuestion.trim() !== '') {
      setQuestions([...questions, newQuestion]);
      setNewQuestion('');
    }
  };

  const handleAnswerChange = (index, value) => {
    setAnswers({
      ...answers,
      [index]: value,
    });
  };

  const handleAnswerSubmit = (index) => {
    if (answers[index]?.trim() !== '') {
      setSubmittedAnswers({
        ...submittedAnswers,
        [index]: answers[index],
      });

      // Show success message
      setSuccessIndex(index);
      setTimeout(() => setSuccessIndex(null), 2000); // Hide after 2 seconds

      // Reset editing state
      setEditingAnswerIndex(null);
    }
  };

  const handleEditAnswer = (index) => {
    setEditingAnswerIndex(index); // Set the index of the answer to edit
  };

  const handleDeleteQuestion = (indexToDelete) => {
    const updatedQuestions = questions.filter((_, index) => index !== indexToDelete);
    setQuestions(updatedQuestions);

    const updatedAnswers = { ...answers };
    delete updatedAnswers[indexToDelete];
    setAnswers(updatedAnswers);

    const updatedSubmitted = { ...submittedAnswers };
    delete updatedSubmitted[indexToDelete];
    setSubmittedAnswers(updatedSubmitted);
  };

  return (
    <div className="mentorqaContainer">
      <h2 className="text-center mb-4">Mentor Q&A</h2>

      {/* Ask Question Section */}
      <div className="askSection">
        <h4>Ask a Mentor:</h4>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Type your question..."
          />
          <button className="btn btn-primary" onClick={handleQuestionSubmit}>
            Ask
          </button>
        </div>
      </div>

      {/* Questions List */}
      <div className="questionsList">
        {questions.length === 0 ? (
          <p className="text-muted text-center mt-5" style={{ fontSize: '18px' }}>
            No questions yet. Be the first to ask a mentor! 
          </p>
        ) : (
          questions.map((q, index) => (
            <div key={index} className="card mb-3 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="card-title mb-0">Q: {q}</h5>
                  <button
                    className="btn btn-danger btn-sm"
                    style={{ width: '70px', fontSize: '14px' }}
                    onClick={() => handleDeleteQuestion(index)}
                  >
                    Delete
                  </button>
                </div>

                {submittedAnswers[index] ? (
                  <>
                    <p className="mt-2"><strong>Answer:</strong> {submittedAnswers[index]}</p>
                    <button
                      className="btn btn-warning btn-sm mt-2"
                      style={{ width: '100px', fontSize: '14px' }}
                      onClick={() => handleEditAnswer(index)}
                    >
                      Edit Answer
                    </button>
                  </>
                ) : (
                  <>
                    <textarea
                      className="form-control mt-2"
                      rows="2"
                      placeholder="Write answer here..."
                      value={answers[index] || ''}
                      onChange={(e) => handleAnswerChange(index, e.target.value)}
                    />
                    <button
                      className="btn btn-success btn-sm mt-2"
                      style={{ width: '100px', fontSize: '14px' }}
                      onClick={() => handleAnswerSubmit(index)}
                    >
                      Submit Answer
                    </button>
                    {successIndex === index && (
                      <div className="text-success mt-2" style={{ fontWeight: 'bold' }}>
                         Answer submitted!
                      </div>
                    )}
                  </>
                )}

                {editingAnswerIndex === index && (
                  <div className="text-info mt-2">
                    <strong>Edit your answer:</strong>
                    <textarea
                      className="form-control mt-2"
                      rows="2"
                      value={answers[index] || ''}
                      onChange={(e) => handleAnswerChange(index, e.target.value)}
                    />
                    <button
                      className="btn btn-success btn-sm mt-2"
                      style={{ width: '100px', fontSize: '14px' }}
                      onClick={() => handleAnswerSubmit(index)}
                    >
                      Update Answer
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MentorQA;

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // <<--- Import the custom CSS

function Dashboard() {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Career Quiz',
      description: 'Discover your best career path by answering a few questions.',
      path: '/quiz',
    },
    {
      title: 'Skill Tracker',
      description: 'Track and develop the skills you need for your career.',
      path: '/skills',
    },
    {
      title: 'Resources',
      description: 'Find recommended resources based on your career interest.',
      path: '/resources',
    },
    {
      title: 'Goal Tracker',
      description: 'Set career goals and track your progress over time.',
      path: '/goals',
    },
    {
      title: 'Mentor Q&A',
      description: 'Get answers to your career questions from experienced mentors.',
      path: '/mentor',
    },
  ];

  return (
    <div className="dashboard-background"> {/* Background applied here */}
      <Container className="mt-5">
      <h2 className="text-center mb-4 fw-bold custom-dashboard-heading">
  Welcome to Career Platform Dashboard
</h2>

        <Row>
          {features.map((feature, idx) => (
            <Col key={idx} md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                  <Button variant="primary" className="w-100" onClick={() => navigate(feature.path)}>
  Explore
</Button>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;


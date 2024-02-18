import React, { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';

const Home = () => {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handling form submission goes here
    // Displaying our success message
    setShowSuccess(true);
  };

  return (
    <Card style={{ border: 'none' }}>
      <Card.Body className="border rounded">  
        <Card.Header><h5>Welcome</h5></Card.Header>
        <Card.Title>Home Page</Card.Title>
        <Card.Text>
          This is the homepage of our website. Explore other sections using the navigation above.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
          > </Form.Control>
            
            <Form.Text className="text-muted">
              Subscribe to our newsletter for updates.
            </Form.Text>
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        
        {showSuccess && (
          <Alert variant="success" className="mt-3">
            Your email {email} has been submitted successfully!
          </Alert>
        )}
      </Card.Body>
    </Card>
  );
};

export default Home;

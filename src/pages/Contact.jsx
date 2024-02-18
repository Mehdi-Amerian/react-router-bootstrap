import React from 'react';
import { Button, Card } from 'react-bootstrap';



const Contact = () => {
  return (
   
    <Card style={{ border: 'none' }}>
      <Card.Body className="border rounded">    
        <Card.Header><h5>Contact Us</h5></Card.Header>
        <Card.Text>
          For questions or feedback, please choose a category below:
        </Card.Text>
      </Card.Body>
      <br/>
      <Card.Body className="border rounded">
        <Card.Header>General Inquiry</Card.Header>
        <Card.Text>
        For general inquiries, please email us at:
        </Card.Text>
        <Button variant="primary">general@example.com</Button>
      </Card.Body>
      <br/>
      <Card.Body className="border rounded">
        <Card.Header>Feedback</Card.Header>
        <Card.Text>
        We value your feedback! Please share your comments at:
        </Card.Text>
        <Button variant="warning">feedback@example.com</Button>
      </Card.Body>
      <br/>
      <Card.Body className="border rounded">
        <Card.Header>Support</Card.Header>
        <Card.Text>
        Need assistance? Contact our support team at:
        </Card.Text>
        <Button variant="secondary">support@example.com</Button>
      </Card.Body>
      
      
    </Card>
    
  );
};

export default Contact;

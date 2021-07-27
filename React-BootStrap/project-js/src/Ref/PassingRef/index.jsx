import React from 'react';
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';
import { Logger } from '../../Logger';
import TextField from '../TextField';

export default function PassingRef() {
  const firstNameRef = React.useRef(null);
  const lastNameRef = React.useRef(null);
  const fullNameRef = React.useRef('');
  const [count, setCount] = React.useState(0);
  // const [fullName, setFullName] = React.useState('');

  const showFullName = (event) => {
    event.preventDefault();
    const name = `${firstNameRef.current.value} ${lastNameRef.current.value}`;
    // setFullName(name);
    fullNameRef.current = name;
    setCount(count + 1);
  };

  Logger.log('I Renderded');

  return (
    <Form onSubmit={showFullName}>
      <Row>
        <Col xs={12}>
          <TextField label="First Name" id="firstName" placeholder="Enter your first name" type="text" ref={firstNameRef} requred />
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <TextField label="Last Name" id="lastName" placeholder="Enter your last name" type="text" ref={lastNameRef} requred />
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Button type="submit" variant="primary" className="mb-3">
            Show Fullname
          </Button>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Alert variant="info">Your Fullname: {fullNameRef.current}</Alert>
        </Col>
      </Row>
    </Form>
  );
}

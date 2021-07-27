import React from 'react';
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';
import { Logger } from '../../Logger';
import TextField from '../TextField';

export default function PassingRef(): JSX.Element {
  const firstNameRef = React.useRef<HTMLInputElement>(null);
  const lastNameRef = React.useRef<HTMLInputElement>(null);
  const fullNameRef = React.useRef<string>('');
  const [count, setCount] = React.useState<number>(0);
  // const [fullName, setFullName] = React.useState<string>('');

  const showFullName = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    const firstName = firstNameRef && firstNameRef.current ? firstNameRef.current.value : '';
    const lastName = lastNameRef && lastNameRef.current ? lastNameRef.current.value : '';
    const name = `${firstName} ${lastName}`;
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

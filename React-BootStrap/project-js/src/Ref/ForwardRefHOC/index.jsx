import React from 'react';
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Logger } from '../../Logger';
import manageState from '../ManageStateHOC';
import TextFieldWithState from '../TextFieldWithState';

const FirstName = manageState(TextFieldWithState);
const LastName = manageState(TextFieldWithState);

export default function ForwardRefHOC() {
  const firstNameRef = React.useRef(null);
  const lastNameRef = React.useRef(null);
  const [fullName, setFullName] = React.useState('');

  const showFullName = (event) => {
    event.preventDefault();
    const name = `${firstNameRef.current.value} ${lastNameRef.current.value}`;
    setFullName(name);
  };

  Logger.log('Rendered');

  return (
    <Form onSubmit={showFullName}>
      <Row>
        <Col xs={12}>
          <FirstName
            label="First Name"
            id="firstName"
            placeholder="Enter your first name"
            type="text"
            ref={firstNameRef}
            stateKey="firstName"
            requred
          />
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <LastName label="Last Name" id="lastName" placeholder="Enter your last name" type="text" ref={lastNameRef} stateKey="lastName" requred />
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
          <Alert variant="info">Your Fullname: {fullName}</Alert>
        </Col>
      </Row>
    </Form>
  );
}

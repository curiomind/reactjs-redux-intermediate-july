import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Logger } from '../../Logger';
import TextField from './TextField';
import FullName from './FullName';
import FullNamePure from './FullNamePure';

export default function PureFunctionalComponent() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [fullName, setFullName] = React.useState('');

  const showFullName = () => {
    let newFullName = '';
    if (firstName && lastName) {
      newFullName = `${firstName} ${lastName}`;
    }
    setFullName(newFullName);
  };

  React.useEffect(() => {
    Logger.log('Parent Component: Loaded');

    return () => {
      Logger.log('Parent Component: Unloaded');
    };
  }, []);

  React.useEffect(() => {
    Logger.log('Parent Component: Updated');
  });

  return (
    <>
      <Row>
        <Col xs={12}>
          <TextField
            label="First Name"
            id="firstName"
            placeholder="Enter your first name"
            type="text"
            requred
            onChange={(event) => setFirstName(event.target.value)}
            value={firstName}
          />
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <TextField
            label="Last Name"
            id="lastName"
            placeholder="Enter your last name"
            type="text"
            onChange={(event) => setLastName(event.target.value)}
            value={lastName}
          />
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Button onClick={showFullName} variant="primary" className="mb-3">
            Show Fullname
          </Button>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          {fullName ? (
            <>
              <FullName fullName={fullName} />
              <FullNamePure fullName={fullName} />
            </>
          ) : null}
        </Col>
      </Row>
    </>
  );
}

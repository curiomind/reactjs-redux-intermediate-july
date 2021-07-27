import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

export default function IncrementDecrement(): JSX.Element {
  let count = 0;

  const handleIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    count += 1;
  };

  const handleDecrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    count -= 1;
  };

  return (
    <>
      <h3>Increment / Decrement</h3>
      <Row className="mb-3">
        <Col xs="auto">
          <Button variant="primary" className="mb-3" onClick={handleIncrement}>
            Increment
          </Button>
        </Col>
        <Col xs="auto">
          <Button variant="primary" className="mb-3" onClick={handleDecrement}>
            Decrement
          </Button>
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="incrementDecrementResult" visuallyHidden>
            Result
          </Form.Label>
          <Form.Control type="text" readOnly id="incrementDecrementResult" value={count} />
        </Col>
      </Row>
    </>
  );
}

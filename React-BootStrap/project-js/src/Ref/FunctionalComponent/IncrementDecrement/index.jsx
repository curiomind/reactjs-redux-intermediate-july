import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Logger } from '../../../Logger';

export default function IncrementDecrement() {
  const countRef = React.useRef(0);
  const resultRef = React.useRef(null);

  const handleIncrement = (event) => {
    event.preventDefault();
    const newCount = countRef.current + 1;
    countRef.current = newCount;
    resultRef.current.value = countRef.current;
  };

  const handleDecrement = (event) => {
    event.preventDefault();
    const newCount = countRef.current - 1;
    countRef.current = newCount;
    resultRef.current.value = countRef.current;
  };

  Logger.log('IncrementDecrement rendered!');

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
          <Form.Control type="text" readOnly id="incrementDecrementResult" ref={resultRef} />
        </Col>
      </Row>
    </>
  );
}

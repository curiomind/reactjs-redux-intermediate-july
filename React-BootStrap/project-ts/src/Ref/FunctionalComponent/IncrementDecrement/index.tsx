import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Logger } from '../../../Logger';

export default function IncrementDecrement(): JSX.Element {
  const countRef = React.useRef<number>(0);
  const resultRef = React.useRef<HTMLInputElement>(null);

  const handleIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newCount = countRef.current + 1;
    countRef.current = newCount;
    if (resultRef && resultRef.current) {
      resultRef.current.value = countRef.current.toString();
    }
  };

  const handleDecrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newCount = countRef.current - 1;
    countRef.current = newCount;
    if (resultRef && resultRef.current) {
      resultRef.current.value = countRef.current.toString();
    }
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

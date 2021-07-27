import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

interface ComponentProps {
  count: number;
  handleIncrement: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleDecrement: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function IncrementDecrement({ count, handleIncrement, handleDecrement }: ComponentProps): JSX.Element {
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

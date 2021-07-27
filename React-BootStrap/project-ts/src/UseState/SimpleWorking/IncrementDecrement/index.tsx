import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Logger } from '../../../Logger';

export default function IncrementDecrement(): JSX.Element {
  const [count, setCount] = React.useState(0);

  const handleIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCount(count + 1);
  };

  const handleDecrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCount(count - 1);
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
          <Form.Control type="text" readOnly id="incrementDecrementResult" value={count} />
        </Col>
      </Row>
    </>
  );
}
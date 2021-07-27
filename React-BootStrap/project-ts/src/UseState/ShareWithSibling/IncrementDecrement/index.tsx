import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

interface ComponentProps {
  countResult: number;
  onIncrementDecrement: (count: number) => void;
  id: string;
}

export default function IncrementDecrement({ countResult, onIncrementDecrement, id }: ComponentProps): JSX.Element {
  const [count, setCount] = React.useState(0);

  const handleIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newCount = count + 1;
    setCount(newCount);
    if (onIncrementDecrement) {
      onIncrementDecrement(newCount);
    }
  };

  const handleDecrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newCount = count - 1;
    setCount(newCount);
    if (onIncrementDecrement) {
      onIncrementDecrement(newCount);
    }
  };

  React.useEffect(() => {
    setCount(countResult);
  }, [countResult]);

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
          <Form.Label htmlFor={`incrementDecrementResult${id}`} visuallyHidden>
            Result
          </Form.Label>
          <Form.Control type="text" readOnly id={`incrementDecrementResult${id}`} value={count} />
        </Col>
      </Row>
    </>
  );
}

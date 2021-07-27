import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { IncrementDecrementState, IncrementDecrementActions } from '../../Reducers/IncrementDecrement';

interface ComponentProps {
  state: IncrementDecrementState;
  dispatch: React.Dispatch<IncrementDecrementActions>;
  id: string;
}

export default function IncrementDecrement({ state, dispatch, id }: ComponentProps): JSX.Element {
  const handleIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch({ type: 'increment' });
  };

  const handleDecrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch({ type: 'decrement' });
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
          <Form.Label htmlFor={`incrementDecrementResult${id}`} visuallyHidden>
            Result
          </Form.Label>
          <Form.Control type="text" readOnly id={`incrementDecrementResult${id}`} value={state.count} />
        </Col>
      </Row>
    </>
  );
}

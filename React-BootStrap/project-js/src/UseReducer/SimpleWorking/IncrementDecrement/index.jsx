import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { incrementDecrementInitialState, incrementDecrementReducer } from '../../Reducers/IncrementDecrement';

export default function IncrementDecrement() {
  const [state, dispatch] = React.useReducer(incrementDecrementReducer, incrementDecrementInitialState);

  const handleIncrement = (event) => {
    event.preventDefault();
    dispatch({ type: 'increment' });
  };

  const handleDecrement = (event) => {
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
          <Form.Label htmlFor="incrementDecrementResult" visuallyHidden>
            Result
          </Form.Label>
          <Form.Control type="text" readOnly id="incrementDecrementResult" value={state.count} />
        </Col>
      </Row>
    </>
  );
}

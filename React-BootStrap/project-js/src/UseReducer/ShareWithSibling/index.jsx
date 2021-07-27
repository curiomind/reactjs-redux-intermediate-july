import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import IncrementDecrement from './IncrementDecrement';
import { incrementDecrementInitialState, incrementDecrementReducer } from '../Reducers/IncrementDecrement';

export default function UseReducerWithSibling() {
  const [state, dispatch] = React.useReducer(incrementDecrementReducer, incrementDecrementInitialState);

  return (
    <>
      <IncrementDecrement state={state} dispatch={dispatch} id="one" />

      <IncrementDecrement state={state} dispatch={dispatch} id="two" />

      <h4>Result on Parent</h4>
      <Row className="mb-3">
        <Form.Label htmlFor="parentCountResult" className="col-sm-2">
          Count Result
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" readOnly plaintext id="parentCountResult" value={state.count} />
        </Col>
      </Row>
    </>
  );
}

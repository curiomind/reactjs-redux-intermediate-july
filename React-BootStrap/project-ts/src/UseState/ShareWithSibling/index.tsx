import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import IncrementDecrement from './IncrementDecrement';

export default function UseStateShareWithSibling(): JSX.Element {
  const [countResult, setCountResult] = useState<number>(0);

  const handleIncrementDecrement = (count: number) => {
    setCountResult(count);
  };

  return (
    <>
      <IncrementDecrement countResult={countResult} onIncrementDecrement={handleIncrementDecrement} id="one" />

      <IncrementDecrement countResult={countResult} onIncrementDecrement={handleIncrementDecrement} id="two" />

      <h4>Result on Parent</h4>
      <Row className="mb-3">
        <Form.Label htmlFor="parentCountResult" className="col-sm-2">
          Count Result
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" readOnly plaintext id="parentCountResult" value={countResult} />
        </Col>
      </Row>
    </>
  );
}

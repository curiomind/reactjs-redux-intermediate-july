import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

export default function Addition({ numberOne, numberTwo, result, onNumberOneChange, onNumberTwoChange, calculate }) {
  // const handleNumberTwoChange = (event) => {
  //   setNumberTwo(parseInt(event.target.value, 10));
  // };

  return (
    <>
      <h3>Addition</h3>
      <Row className="mb-3">
        <Col xs="auto">
          <Form.Label htmlFor="additionNumberOne" visuallyHidden>
            First Number
          </Form.Label>
          <Form.Control type="text" id="additionNumberOne" onChange={onNumberOneChange} value={numberOne} />
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="additionNumberTwo" visuallyHidden>
            Second Number
          </Form.Label>
          <Form.Control type="text" id="additionNumberTwo" onChange={onNumberTwoChange} value={numberTwo} />
        </Col>
        <Col xs="auto">
          <Button variant="primary" className="mb-3" onClick={calculate}>
            Add
          </Button>
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="additionResult" visuallyHidden>
            Result
          </Form.Label>
          <Form.Control type="text" readOnly id="additionResult" value={result} />
        </Col>
      </Row>
    </>
  );
}

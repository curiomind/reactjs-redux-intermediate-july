import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

export default function Subtraction({ numberOne, numberTwo, result, onNumberOneChange, onNumberTwoChange, calculate }) {
  return (
    <>
      <h3>Subtraction</h3>
      <Row className="mb-3">
        <Col xs="auto">
          <Form.Label htmlFor="subtractionNumberOne" visuallyHidden>
            First Number
          </Form.Label>
          <Form.Control type="text" id="subtractionNumberOne" onChange={onNumberOneChange} value={numberOne} />
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="subtractionNumberTwo" visuallyHidden>
            Second Number
          </Form.Label>
          <Form.Control type="text" id="subtractionNumberTwo" onChange={onNumberTwoChange} value={numberTwo} />
        </Col>
        <Col xs="auto">
          <Button variant="primary" className="mb-3" onClick={calculate}>
            Add
          </Button>
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="subtractionResult" visuallyHidden>
            Result
          </Form.Label>
          <Form.Control type="text" readOnly id="subtractionResult" value={result} />
        </Col>
      </Row>
    </>
  );
}

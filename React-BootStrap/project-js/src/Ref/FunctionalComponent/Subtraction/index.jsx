import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Logger } from '../../../Logger';

export default function Subtraction() {
  const numberOneRef = React.useRef(null);
  const numberTwoRef = React.useRef(null);
  const resultRef = React.useRef(null);

  const calculate = (event) => {
    event.preventDefault();
    resultRef.current.value = parseInt(numberOneRef.current.value, 10) - parseInt(numberTwoRef.current.value, 10);
  };

  Logger.log('Subtraction rendered!');

  return (
    <>
      <h3>Addition</h3>
      <Row className="mb-3">
        <Col xs="auto">
          <Form.Label htmlFor="subtractionNumberOne" visuallyHidden>
            First Number
          </Form.Label>
          <Form.Control type="text" id="subtractionNumberOne" ref={numberOneRef} />
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="subtractionNumberTwo" visuallyHidden>
            Second Number
          </Form.Label>
          <Form.Control type="text" id="subtractionNumberTwo" ref={numberTwoRef} />
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
          <Form.Control type="text" readOnly id="subtractionResult" ref={resultRef} />
        </Col>
      </Row>
    </>
  );
}

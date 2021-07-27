import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

export default function Subtraction(): JSX.Element {
  let numberOne = 0;
  let numberTwo = 0;
  let result = 0;

  const handleNumberOneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    numberOne = parseInt(event.target.value, 10);
  };

  const handleNumberTwoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    numberTwo = parseInt(event.target.value, 10);
  };

  const calculate = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    result = numberOne - numberTwo;
  };

  return (
    <>
      <h3>Subtraction</h3>
      <Row className="mb-3">
        <Col xs="auto">
          <Form.Label htmlFor="subtractionNumberOne" visuallyHidden>
            First Number
          </Form.Label>
          <Form.Control type="text" id="subtractionNumberOne" onChange={handleNumberOneChange} value={numberOne} />
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="subtractionNumberTwo" visuallyHidden>
            Second Number
          </Form.Label>
          <Form.Control type="text" id="subtractionNumberTwo" onChange={handleNumberTwoChange} value={numberTwo} />
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

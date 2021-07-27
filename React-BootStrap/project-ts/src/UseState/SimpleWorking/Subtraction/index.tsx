import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Logger } from '../../../Logger';

export default function Subtraction(): JSX.Element {
  const [numberOne, setNumberOne] = React.useState(0);
  const [numberTwo, setNumberTwo] = React.useState(0);
  const [result, setResult] = React.useState(0);

  const handleNumberOneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOne(parseInt(event.target.value, 10));
  };

  const handleNumberTwoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberTwo(parseInt(event.target.value, 10));
  };

  const calculate = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setResult(numberOne - numberTwo);
  };

  Logger.log('Subtraction rendered!');

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

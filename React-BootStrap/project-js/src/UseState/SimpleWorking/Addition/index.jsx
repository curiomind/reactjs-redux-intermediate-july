import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Logger } from '../../../Logger';

export default function Addition() {
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [result, setResult] = useState(0);

  // const handleNumberOneChange = (event) => {
  //   // setNumberOne(event.target.value);
  //   setNumberOne(parseInt(event.target.value, 10));
  // };

  const handleNumberTwoChange = (event) => {
    setNumberTwo(parseInt(event.target.value, 10));
  };

  const calculate = (event) => {
    event.preventDefault();
    setResult(numberOne + numberTwo);
  };

  Logger.log('Addition rendered!');

  return (
    <>
      <h3>Addition</h3>
      <Row className="mb-3">
        <Col xs="auto">
          <Form.Label htmlFor="additionNumberOne" visuallyHidden>
            First Number
          </Form.Label>
          <Form.Control type="text" id="additionNumberOne" onChange={(event) => setNumberOne(parseInt(event.target.value, 10))} value={numberOne} />
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="additionNumberTwo" visuallyHidden>
            Second Number
          </Form.Label>
          <Form.Control type="text" id="additionNumberTwo" onChange={handleNumberTwoChange} value={numberTwo} />
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

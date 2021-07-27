import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import Addition from './Addition';
import Subtraction from './Subtraction';
import IncrementDecrement from './IncrementDecrement';

export default function UseStateShareWithChildran(): JSX.Element {
  const [additionNumberOne, setAdditionNumberOne] = useState<number>(0);
  const [additionNumberTwo, setAdditionNumberTwo] = useState<number>(0);
  const [additionResult, setAdditionResult] = useState<number>(0);

  const [subtractionNumberOne, setSubtractionNumberOne] = useState<number>(0);
  const [subtractionNumberTwo, setSubtractionNumberTwo] = useState<number>(0);
  const [subtractionResult, setSubtractionResult] = useState<number>(0);

  const [count, setCount] = React.useState<number>(0);

  const handleIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCount(count + 1);
  };

  const handleDecrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCount(count - 1);
  };

  const handleAdditionNumberOneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdditionNumberOne(parseInt(event.target.value, 10));
  };

  const handleAdditionNumberTwoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdditionNumberTwo(parseInt(event.target.value, 10));
  };

  const addition = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setAdditionResult(additionNumberOne + additionNumberTwo);
  };

  const handleSubtractionNumberOneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubtractionNumberOne(parseInt(event.target.value, 10));
  };

  const handleSubtractionNumberTwoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubtractionNumberTwo(parseInt(event.target.value, 10));
  };

  const subtraction = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSubtractionResult(subtractionNumberOne - subtractionNumberTwo);
  };

  return (
    <>
      <Addition
        numberOne={additionNumberOne}
        numberTwo={additionNumberTwo}
        result={additionResult}
        onNumberOneChange={handleAdditionNumberOneChange}
        onNumberTwoChange={handleAdditionNumberTwoChange}
        calculate={addition}
      />
      <Subtraction
        numberOne={subtractionNumberOne}
        numberTwo={subtractionNumberTwo}
        result={subtractionResult}
        onNumberOneChange={handleSubtractionNumberOneChange}
        onNumberTwoChange={handleSubtractionNumberTwoChange}
        calculate={subtraction}
      />
      {/* <Subtraction
        numberOne={subtractionNumberOne}
        numberTwo={subtractionNumberTwo}
        result={subtractionResult}
        onNumberOneChange={handleSubtractionNumberOneChange}
        onNumberTwoChange={handleSubtractionNumberTwoChange}
        calculate={addition}
      /> */}
      <IncrementDecrement count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />

      <h4>Result on Parent</h4>
      <Row className="mb-3">
        <Form.Label htmlFor="parentAdditionResult" className="col-sm-2">
          Addition Result
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" readOnly plaintext id="parentAdditionResult" value={additionResult} />
        </Col>
      </Row>
      <Row className="mb-3">
        <Form.Label htmlFor="parentSubtractionResult" className="col-sm-2">
          Subtraction Result
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" readOnly plaintext id="parentSubtractionResult" value={subtractionResult} />
        </Col>
      </Row>
      <Row className="mb-3">
        <Form.Label htmlFor="parentCountResult" className="col-sm-2">
          Count Result
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" readOnly plaintext id="parentCountResult" value={count} />
        </Col>
      </Row>
    </>
  );
}

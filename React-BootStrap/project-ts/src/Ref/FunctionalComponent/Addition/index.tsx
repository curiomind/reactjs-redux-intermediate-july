import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Logger } from '../../../Logger';

export default function Addition(): JSX.Element {
  const numberOneRef = React.useRef<HTMLInputElement>(null);
  const numberTwoRef = React.useRef<HTMLInputElement>(null);
  const resultRef = React.useRef<HTMLInputElement>(null);

  const calculate = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const numberOne = numberOneRef && numberOneRef.current ? parseInt(numberOneRef.current.value, 10) : 0;
    const numberTwo = numberTwoRef && numberTwoRef.current ? parseInt(numberTwoRef.current.value, 10) : 0;
    const result = numberOne + numberTwo;

    if (resultRef && resultRef.current) {
      resultRef.current.value = result.toString();
    }
  };

  React.useLayoutEffect(() => {
    if (numberOneRef && numberOneRef.current) {
      numberOneRef.current.value = '0';
    }
    if (numberTwoRef && numberTwoRef.current) {
      numberTwoRef.current.value = '0';
    }
    if (resultRef && resultRef.current) {
      resultRef.current.value = '0';
    }
  }, []);

  Logger.log('Addition rendered!');

  return (
    <>
      <h3>Addition</h3>
      <Row className="mb-3">
        <Col xs="auto">
          <Form.Label htmlFor="additionNumberOne" visuallyHidden>
            First Number
          </Form.Label>
          <Form.Control type="text" id="additionNumberOne" ref={numberOneRef} />
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="additionNumberTwo" visuallyHidden>
            Second Number
          </Form.Label>
          <Form.Control type="text" id="additionNumberTwo" ref={numberTwoRef} />
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
          <Form.Control type="text" readOnly id="additionResult" ref={resultRef} />
        </Col>
      </Row>
    </>
  );
}

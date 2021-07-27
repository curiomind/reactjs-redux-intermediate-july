import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Logger } from '../../../Logger';

export default function Addition() {
  const numberOneRef = React.useRef(null);
  const numberTwoRef = React.useRef(null);
  const resultRef = React.useRef(null);

  const calculate = (event) => {
    event.preventDefault();
    resultRef.current.value = parseInt(numberOneRef.current.value, 10) + parseInt(numberTwoRef.current.value, 10);
  };

  React.useLayoutEffect(() => {
    numberOneRef.current.value = 0;
    numberTwoRef.current.value = 0;
    resultRef.current.value = 0;
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

import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { SimpleContext } from '../Context';

export default function Subtraction() {
  const { state, dispatch } = React.useContext(SimpleContext);

  const handleNumberOneChange = (event) => {
    dispatch({ type: 'subtractionNumberOne', payload: parseInt(event.target.value, 10) });
  };

  const handleNumberTwoChange = (event) => {
    dispatch({ type: 'subtractionNumberTwo', payload: parseInt(event.target.value, 10) });
  };

  const calculate = (event) => {
    event.preventDefault();
    dispatch({ type: 'subtractionCalculdate' });
  };

  return (
    <>
      <h3>Subtraction</h3>
      <Row className="mb-3">
        <Col xs="auto">
          <Form.Label htmlFor="subtractionNumberOne" visuallyHidden>
            First Number
          </Form.Label>
          <Form.Control type="text" id="subtractionNumberOne" onChange={handleNumberOneChange} value={state.subtractionNumberOne} />
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="subtractionNumberTwo" visuallyHidden>
            Second Number
          </Form.Label>
          <Form.Control type="text" id="subtractionNumberTwo" onChange={handleNumberTwoChange} value={state.subtractionNumberTwo} />
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
          <Form.Control type="text" readOnly id="subtractionResult" value={state.subtractionResult} />
        </Col>
      </Row>
    </>
  );
}

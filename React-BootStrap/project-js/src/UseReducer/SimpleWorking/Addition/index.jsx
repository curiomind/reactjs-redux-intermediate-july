import React, { useReducer } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { additionInitialState, additionReducer } from '../../Reducers/Addition';

export default function Addition() {
  const [state, dispatch] = useReducer(additionReducer, additionInitialState);

  const handleNumberOneChange = (event) => {
    dispatch({ type: 'saveNumberOne', payload: parseInt(event.target.value, 10) });
  };

  const handleNumberTwoChange = (event) => {
    dispatch({ type: 'saveNumberTwo', payload: parseInt(event.target.value, 10) });
  };

  const calculate = (event) => {
    event.preventDefault();
    dispatch({ type: 'calculdate' });
  };

  return (
    <>
      <h3>Addition</h3>
      <Row className="mb-3">
        <Col xs="auto">
          <Form.Label htmlFor="additionNumberOne" visuallyHidden>
            First Number
          </Form.Label>
          <Form.Control type="text" id="additionNumberOne" onChange={handleNumberOneChange} value={state.numberOne} />
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="additionNumberTwo" visuallyHidden>
            Second Number
          </Form.Label>
          <Form.Control type="text" id="additionNumberTwo" onChange={handleNumberTwoChange} value={state.numberTwo} />
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
          <Form.Control type="text" readOnly id="additionResult" value={state.result} />
        </Col>
      </Row>
    </>
  );
}

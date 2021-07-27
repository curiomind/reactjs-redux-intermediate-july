import React, { useReducer } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import Addition from './Addition';
import Subtraction from './Subtraction';
import IncrementDecrement from './IncrementDecrement';
import { initialState, childrenReducer } from '../Reducers/Children';

export default function UseReducerShareWithChildran(): JSX.Element {
  const [state, dispatch] = useReducer(childrenReducer, initialState);

  const handleIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch({ type: 'increment' });
  };

  const handleDecrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch({ type: 'decrement' });
  };

  const handleAdditionNumberOneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'saveAdditionNumberOne', payload: parseInt(event.target.value, 10) });
  };

  const handleAdditionNumberTwoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'saveAdditionNumberTwo', payload: parseInt(event.target.value, 10) });
  };

  const addition = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch({ type: 'additionCalculdate' });
  };

  const handleSubtractionNumberOneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'subtractionNumberOne', payload: parseInt(event.target.value, 10) });
  };

  const handleSubtractionNumberTwoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'subtractionNumberTwo', payload: parseInt(event.target.value, 10) });
  };

  const subtraction = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch({ type: 'subtractionCalculdate' });
  };

  return (
    <>
      <Addition
        numberOne={state.additionNumberOne}
        numberTwo={state.additionNumberTwo}
        result={state.additionResult}
        onNumberOneChange={handleAdditionNumberOneChange}
        onNumberTwoChange={handleAdditionNumberTwoChange}
        calculate={addition}
      />
      <Subtraction
        numberOne={state.subtractionNumberOne}
        numberTwo={state.subtractionNumberTwo}
        result={state.subtractionResult}
        onNumberOneChange={handleSubtractionNumberOneChange}
        onNumberTwoChange={handleSubtractionNumberTwoChange}
        calculate={subtraction}
      />
      <IncrementDecrement count={state.count} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />

      <h4>Result on Parent</h4>
      <Row className="mb-3">
        <Form.Label htmlFor="parentAdditionResult" className="col-sm-2">
          Addition Result
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" readOnly plaintext id="parentAdditionResult" value={state.additionResult} />
        </Col>
      </Row>
      <Row className="mb-3">
        <Form.Label htmlFor="parentSubtractionResult" className="col-sm-2">
          Subtraction Result
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" readOnly plaintext id="parentSubtractionResult" value={state.subtractionResult} />
        </Col>
      </Row>
      <Row className="mb-3">
        <Form.Label htmlFor="parentCountResult" className="col-sm-2">
          Count Result
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" readOnly plaintext id="parentCountResult" value={state.count} />
        </Col>
      </Row>
    </>
  );
}

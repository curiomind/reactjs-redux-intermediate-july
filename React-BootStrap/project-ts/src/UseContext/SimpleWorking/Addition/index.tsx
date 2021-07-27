import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { SimpleContext } from '../Context';

export default function Addition(): JSX.Element {
  const { state, dispatch } = React.useContext(SimpleContext);

  const handleNumberOneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'saveAdditionNumberOne', payload: parseInt(event.target.value, 10) });
  };

  const handleNumberTwoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'saveAdditionNumberTwo', payload: parseInt(event.target.value, 10) });
  };

  const calculate = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch({ type: 'additionCalculdate' });
  };

  return (
    <>
      <h3>Addition</h3>
      <Row className="mb-3">
        <Col xs="auto">
          <Form.Label htmlFor="additionNumberOne" visuallyHidden>
            First Number
          </Form.Label>
          <Form.Control type="text" id="additionNumberOne" onChange={handleNumberOneChange} value={state.additionNumberOne} />
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="additionNumberTwo" visuallyHidden>
            Second Number
          </Form.Label>
          <Form.Control type="text" id="additionNumberTwo" onChange={handleNumberTwoChange} value={state.additionNumberTwo} />
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
          <Form.Control type="text" readOnly id="additionResult" value={state.additionResult} />
        </Col>
      </Row>
    </>
  );
}

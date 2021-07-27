import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Logger } from '../../../Logger';

export default class Subtraction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOne: 0,
      numberTwo: 0,
      result: 0,
    };
  }

  componentDidUpdate() {
    Logger.log('Subtraction rendered!');
  }

  render() {
    const { numberOne, numberTwo, result } = this.state;

    return (
      <>
        <h3>Addition</h3>
        <Row className="mb-3">
          <Col xs="auto">
            <Form.Label htmlFor="subtractionNumberOne" visuallyHidden>
              First Number
            </Form.Label>
            <Form.Control
              type="text"
              id="subtractionNumberOne"
              onChange={(event) => this.setState({ numberOne: parseInt(event.target.value, 10) })}
              value={numberOne}
            />
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="subtractionNumberTwo" visuallyHidden>
              Second Number
            </Form.Label>
            <Form.Control
              type="text"
              id="subtractionNumberTwo"
              onChange={(event) => this.setState({ numberTwo: parseInt(event.target.value, 10) })}
              value={numberTwo}
            />
          </Col>
          <Col xs="auto">
            <Button
              variant="primary"
              className="mb-3"
              onClick={(event) => {
                event.preventDefault();
                this.setState({ result: numberOne - numberTwo });
              }}>
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
}

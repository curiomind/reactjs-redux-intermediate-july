import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Logger } from '../../../Logger';

export default class Subtraction extends React.Component {
  constructor(props) {
    super(props);

    this.numberOneInput = null;
    this.numberTwoInput = null;
    this.resultInput = null;

    this.numberOneRef = (element) => {
      this.numberOneInput = element;
    };
    this.numberTwoRef = (element) => {
      this.numberTwoInput = element;
    };
    this.resultRef = (element) => {
      this.resultInput = element;
    };

    this.calculate = this.calculate.bind(this);
  }

  componentDidUpdate() {
    Logger.log('Subtraction rendered!');
  }

  calculate(event) {
    event.preventDefault();
    if (this.resultInput && this.numberOneInput && this.numberTwoInput) {
      this.resultInput.value = parseInt(this.numberOneInput.value, 10) - parseInt(this.numberTwoInput.value, 10);
    }
  }

  render() {
    return (
      <>
        <h3>Addition</h3>
        <Row className="mb-3">
          <Col xs="auto">
            <Form.Label htmlFor="subtractionNumberOne" visuallyHidden>
              First Number
            </Form.Label>
            <Form.Control type="text" id="subtractionNumberOne" ref={this.numberOneRef.bind(this)} />
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="subtractionNumberTwo" visuallyHidden>
              Second Number
            </Form.Label>
            <Form.Control type="text" id="subtractionNumberTwo" ref={this.numberTwoRef.bind(this)} />
          </Col>
          <Col xs="auto">
            <Button variant="primary" className="mb-3" onClick={this.calculate}>
              Add
            </Button>
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="subtractionResult" visuallyHidden>
              Result
            </Form.Label>
            <Form.Control type="text" readOnly id="subtractionResult" ref={this.resultRef.bind(this)} />
          </Col>
        </Row>
      </>
    );
  }
}

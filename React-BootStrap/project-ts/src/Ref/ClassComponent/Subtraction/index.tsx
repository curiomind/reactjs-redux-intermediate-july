import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Logger } from '../../../Logger';

type ComponentProps = Record<string, any>;

export default class Subtraction extends React.Component<ComponentProps> {
  numberOneInput: HTMLInputElement | null;
  numberTwoInput: HTMLInputElement | null;
  resultInput: HTMLInputElement | null;

  constructor(props: ComponentProps) {
    super(props);

    this.numberOneInput = null;
    this.numberTwoInput = null;
    this.resultInput = null;

    // this.calculate = this.calculate.bind(this);
    // this.numberOneRef = this.numberOneRef.bind(this);
  }

  componentDidUpdate() {
    Logger.log('Subtraction rendered!');
  }

  numberOneRef(element: HTMLInputElement | null) {
    this.numberOneInput = element;
  }

  numberTwoRef(element: HTMLInputElement | null) {
    this.numberTwoInput = element;
  }
  resultRef(element: HTMLInputElement | null) {
    this.resultInput = element;
  }

  calculate(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const numberOne = this.numberOneInput ? parseInt(this.numberOneInput.value, 10) : 0;
    const numberTwo = this.numberTwoInput ? parseInt(this.numberTwoInput.value, 10) : 0;
    const result = numberOne + numberTwo;

    if (this.resultInput) {
      this.resultInput.value = result.toString();
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
            <Form.Control type="text" id="subtractionNumberOne" ref={this.numberOneRef} />
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="subtractionNumberTwo" visuallyHidden>
              Second Number
            </Form.Label>
            <Form.Control type="text" id="subtractionNumberTwo" ref={this.numberTwoRef} />
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
            <Form.Control type="text" readOnly id="subtractionResult" ref={this.resultRef} />
          </Col>
        </Row>
      </>
    );
  }
}

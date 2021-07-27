import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Logger } from '../../../Logger';

type ComponentProps = Record<string, any>;

export default class Addition extends React.Component<ComponentProps> {
  numberOneRef: React.RefObject<HTMLInputElement>;
  numberTwoRef: React.RefObject<HTMLInputElement>;
  resultRef: React.RefObject<HTMLInputElement>;

  constructor(props: ComponentProps) {
    super(props);

    this.numberOneRef = React.createRef<HTMLInputElement>();
    this.numberTwoRef = React.createRef<HTMLInputElement>();
    this.resultRef = React.createRef<HTMLInputElement>();

    // this.calculate = this.calculate.bind(this);
  }

  componentDidMount() {
    if (this.numberOneRef && this.numberOneRef.current) {
      this.numberOneRef.current.value = '0';
    }
    if (this.numberTwoRef && this.numberTwoRef.current) {
      this.numberTwoRef.current.value = '0';
    }
    if (this.resultRef && this.resultRef.current) {
      this.resultRef.current.value = '0';
    }
  }

  componentDidUpdate() {
    Logger.log('Addition rendered!');
  }

  calculate(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const numberOne = this.numberOneRef && this.numberOneRef.current ? parseInt(this.numberOneRef.current.value, 10) : 0;
    const numberTwo = this.numberTwoRef && this.numberTwoRef.current ? parseInt(this.numberTwoRef.current.value, 10) : 0;
    const result = numberOne + numberTwo;

    if (this.resultRef && this.resultRef.current) {
      this.resultRef.current.value = result.toString();
    }
  }

  render() {
    return (
      <>
        <h3>Addition</h3>
        <Row className="mb-3">
          <Col xs="auto">
            <Form.Label htmlFor="additionNumberOne" visuallyHidden>
              First Number
            </Form.Label>
            <Form.Control type="text" id="additionNumberOne" ref={this.numberOneRef} />
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="additionNumberTwo" visuallyHidden>
              Second Number
            </Form.Label>
            <Form.Control type="text" id="additionNumberTwo" ref={this.numberTwoRef} />
          </Col>
          <Col xs="auto">
            <Button variant="primary" className="mb-3" onClick={this.calculate}>
              Add
            </Button>
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="additionResult" visuallyHidden>
              Result
            </Form.Label>
            <Form.Control type="text" readOnly id="additionResult" ref={this.resultRef} />
          </Col>
        </Row>
      </>
    );
  }
}

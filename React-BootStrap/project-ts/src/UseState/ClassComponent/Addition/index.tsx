import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Logger } from '../../../Logger';

interface ComponentState {
  numberOne: number;
  numberTwo: number;
  result: number;
}

type ComponentProps = Record<string, any>;

export default class Addition extends React.Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props);

    this.state = {
      numberOne: 0,
      numberTwo: 0,
      result: 0,
    };

    this.calculate = this.calculate.bind(this);
    this.handleNumberOneChange = this.handleNumberOneChange.bind(this);
    this.handleNumberTwoChange = this.handleNumberTwoChange.bind(this);
  }

  componentDidUpdate() {
    Logger.log('Addition rendered!');
  }

  handleNumberOneChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ numberOne: parseInt(event.target.value, 10) });
  }

  handleNumberTwoChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ numberTwo: parseInt(event.target.value, 10) });
  }

  calculate(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const { numberOne, numberTwo } = this.state;
    this.setState({ result: numberOne + numberTwo });
  }

  render() {
    const { numberOne, numberTwo, result } = this.state;

    return (
      <>
        <h3>Addition</h3>
        <Row className="mb-3">
          <Col xs="auto">
            <Form.Label htmlFor="additionNumberOne" visuallyHidden>
              First Number
            </Form.Label>
            <Form.Control type="text" id="additionNumberOne" onChange={this.handleNumberOneChange} value={numberOne} />
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="additionNumberTwo" visuallyHidden>
              Second Number
            </Form.Label>
            <Form.Control type="text" id="additionNumberTwo" onChange={this.handleNumberTwoChange} value={numberTwo} />
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
            <Form.Control type="text" readOnly id="additionResult" value={result} />
          </Col>
        </Row>
      </>
    );
  }
}

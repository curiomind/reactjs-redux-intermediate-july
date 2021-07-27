import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Logger } from '../../../Logger';

export default class Addition extends React.Component {
  constructor(props) {
    super(props);

    this.numberOneRef = React.createRef();
    this.numberTwoRef = React.createRef();
    this.resultRef = React.createRef();

    this.calculate = this.calculate.bind(this);
  }

  componentDidMount() {
    this.numberOneRef.current.value = 0;
    this.numberTwoRef.current.value = 0;
    this.resultRef.current.value = 0;
  }

  componentDidUpdate() {
    Logger.log('Addition rendered!');
  }

  calculate(event) {
    event.preventDefault();
    this.resultRef.current.value = parseInt(this.numberOneRef.current.value, 10) + parseInt(this.numberTwoRef.current.value, 10);
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

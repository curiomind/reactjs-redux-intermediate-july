import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Logger } from '../../../Logger';

export default class IncrementDecrement extends React.Component {
  constructor(props) {
    super(props);
    this.countRef = React.createRef(0);
    this.resultRef = React.createRef();

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  componentDidUpdate() {
    Logger.log('IncrementDecrement rendered!');
  }

  handleDecrement(event) {
    event.preventDefault();
    const newCount = this.countRef.current - 1;
    this.countRef.current = newCount;
    this.resultRef.current.value = this.countRef.current;
  }

  handleIncrement(event) {
    event.preventDefault();
    const newCount = this.countRef.current + 1;
    this.countRef.current = newCount;
    this.resultRef.current.value = this.countRef.current;
  }

  render() {
    return (
      <>
        <h3>Increment / Decrement</h3>
        <Row className="mb-3">
          <Col xs="auto">
            <Button variant="primary" className="mb-3" onClick={this.handleIncrement}>
              Increment
            </Button>
          </Col>
          <Col xs="auto">
            <Button variant="primary" className="mb-3" onClick={this.handleDecrement}>
              Decrement
            </Button>
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="incrementDecrementResult" visuallyHidden>
              Result
            </Form.Label>
            <Form.Control type="text" readOnly id="incrementDecrementResult" ref={this.resultRef} />
          </Col>
        </Row>
      </>
    );
  }
}

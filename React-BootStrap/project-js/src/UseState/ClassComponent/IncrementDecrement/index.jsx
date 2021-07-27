import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Logger } from '../../../Logger';

export default class IncrementDecrement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidUpdate() {
    Logger.log('IncrementDecrement rendered!');
  }

  handleIncrement() {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  handleDecrement() {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  }

  render() {
    const { count } = this.state;

    return (
      <>
        <h3>Increment / Decrement</h3>
        <Row className="mb-3">
          <Col xs="auto">
            <Button variant="primary" className="mb-3" onClick={() => this.handleIncrement()}>
              Increment
            </Button>
          </Col>
          <Col xs="auto">
            <Button variant="primary" className="mb-3" onClick={() => this.handleDecrement()}>
              Decrement
            </Button>
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="incrementDecrementResult" visuallyHidden>
              Result
            </Form.Label>
            <Form.Control type="text" readOnly id="incrementDecrementResult" value={count} />
          </Col>
        </Row>
      </>
    );
  }
}

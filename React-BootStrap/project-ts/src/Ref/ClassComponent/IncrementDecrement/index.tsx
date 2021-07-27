import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Logger } from '../../../Logger';

type ComponentProps = Record<string, any>;

export default class IncrementDecrement extends React.Component<ComponentProps> {
  countRef: React.MutableRefObject<number | null>;
  resultRef: React.RefObject<HTMLInputElement>;

  constructor(props: ComponentProps) {
    super(props);
    this.countRef = React.createRef<number>();
    this.resultRef = React.createRef<HTMLInputElement>();

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  componentDidMount() {
    if (this.countRef && this.countRef.current) {
      this.countRef.current = 0;
    }
  }

  componentDidUpdate() {
    Logger.log('IncrementDecrement rendered!');
  }

  assignToResult() {
    if (this.resultRef && this.resultRef.current) {
      this.resultRef.current.value = this.countRef && this.countRef.current ? this.countRef.current.toString() : '';
    }
  }

  handleDecrement(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (this.countRef && this.countRef.current) {
      this.countRef.current = this.countRef.current - 1;
      this.assignToResult();
    }
  }

  handleIncrement(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (this.countRef && this.countRef.current) {
      this.countRef.current = this.countRef.current + 1;
      this.assignToResult();
    }
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

import React from 'react';
import { Form } from 'react-bootstrap';
import { Logger } from '../../../Logger';

export default class TextField extends React.Component {
  componentDidMount() {
    const { label } = this.props;
    Logger.log(`${label}: Loaded`);
  }

  componentDidUpdate() {
    const { label } = this.props;
    Logger.log(`${label}: Updated`);
  }

  componentWillUnmount() {
    const { label } = this.props;
    Logger.log(`${label}: Unloaded`);
  }

  render() {
    const { id, type, label, placeholder, required, onChange } = this.props;

    return (
      <Form.Group controlId={id} className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control type={type} placeholder={placeholder} required={required} onChange={onChange} />
      </Form.Group>
    );
  }
}

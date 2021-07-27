import React from 'react';
import { Form } from 'react-bootstrap';
import { Logger } from '../../../Logger';

interface ComponentProps {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default class TextField extends React.Component<ComponentProps> {
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
    const { id, type, label, placeholder, required, onChange, value } = this.props;

    return (
      <Form.Group controlId={id} className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control type={type} placeholder={placeholder} required={required} onChange={onChange} value={value} />
      </Form.Group>
    );
  }
}

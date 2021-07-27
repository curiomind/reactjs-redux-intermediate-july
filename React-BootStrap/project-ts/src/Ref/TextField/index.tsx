import React from 'react';
import { Form } from 'react-bootstrap';

interface ComponentProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  requred?: boolean;
}

const TextField = React.forwardRef<HTMLInputElement, ComponentProps>((props, ref): JSX.Element => {
  return (
    <Form.Group className="mb-3" controlId={props.id}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control type={props.type} placeholder={props.placeholder} required={props.requred} ref={ref} />
    </Form.Group>
  );
});

export default TextField;

import React from 'react';
import { Form } from 'react-bootstrap';

const TextField = React.forwardRef((props, ref) => {
  return (
    <Form.Group className="mb-3" controlId={props.id}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control type={props.type} placeholder={props.placeholder} required={props.requred} ref={ref} />
    </Form.Group>
  );
});

export default TextField;

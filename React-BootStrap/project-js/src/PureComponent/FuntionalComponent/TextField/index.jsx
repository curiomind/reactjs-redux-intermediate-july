/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Form } from 'react-bootstrap';
import { Logger } from '../../../Logger';

export default function TextField({ id, type, label, placeholder, required, onChange }) {
  React.useEffect(() => {
    Logger.log(`${label}: Loaded`);

    return () => {
      Logger.log(`${label}: Unloaded`);
    };
  }, []);

  React.useEffect(() => {
    Logger.log(`${label}: Updated`);
  });

  return (
    <Form.Group controlId={id} className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} placeholder={placeholder} required={required} onChange={onChange} />
    </Form.Group>
  );
}

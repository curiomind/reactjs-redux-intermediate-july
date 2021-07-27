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

export default function TextField({ id, type, label, placeholder, required, onChange, value }: ComponentProps) {
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
      <Form.Control type={type} placeholder={placeholder} required={required} onChange={onChange} value={value} />
    </Form.Group>
  );
}

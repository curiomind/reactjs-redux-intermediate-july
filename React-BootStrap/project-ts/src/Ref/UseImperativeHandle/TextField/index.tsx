import React from 'react';
import { Form } from 'react-bootstrap';

interface ComponentProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  requred?: boolean;
  onBlur: () => void;
}

export interface ImperativeRef {
  blur: () => void;
  changeLabelColor: (labelColour: string) => void;
}

const TextField = React.forwardRef<ImperativeRef, ComponentProps>((props, ref): JSX.Element => {
  const [title, setTitle] = React.useState<string>('');
  const [color, setColor] = React.useState<string>('#0000ff');
  const textFieldRef = React.useRef<HTMLInputElement>(null);

  React.useImperativeHandle(ref, () => ({
    blur: () => {
      document.title = title;
      if (textFieldRef && textFieldRef.current) {
        textFieldRef.current.blur();
      }
    },
    changeLabelColor: (labelColour: string) => {
      setColor(labelColour);
    },
  }));

  return (
    <Form.Group controlId={props.id} className="mb-3">
      <Form.Label style={{ color }}>{props.label}</Form.Label>
      <Form.Control
        type={props.type}
        placeholder={props.placeholder}
        required={props.requred}
        ref={textFieldRef}
        onBlur={() => {
          if (props.onBlur && typeof props.onBlur === 'function') {
            props.onBlur();
          }
        }}
        onChange={(e) => setTitle(e.target.value)}
      />
    </Form.Group>
  );
});

export default TextField;

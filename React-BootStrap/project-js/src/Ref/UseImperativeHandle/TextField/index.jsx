import React from 'react';
import { Form } from 'react-bootstrap';

const TextField = React.forwardRef((props, ref) => {
  const [title, setTitle] = React.useState('');
  const [color, setColor] = React.useState('#0000ff');
  const textFieldRef = React.useRef(null);

  React.useImperativeHandle(ref, () => ({
    blur: () => {
      document.title = title;
      textFieldRef.current.blur();
    },
    changeLabelColor: (labelColour) => {
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

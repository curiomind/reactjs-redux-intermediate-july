import React from 'react';
import { Form } from 'react-bootstrap';
import { Logger } from '../../Logger';

interface ComponentProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  requred?: boolean;
  setState: (val: string) => void;
  state: string;
}

const TextFieldWithState = React.forwardRef<HTMLInputElement, ComponentProps>((props, ref): JSX.Element => {
  // return (
  //   <Form.Group className="mb-3" controlId={props.id}>
  //     <Form.Label>{props.label}</Form.Label>
  //     <Form.Control
  //       type={props.type}
  //       placeholder={props.placeholder}
  //       required={props.requred}
  //       ref={ref}
  //       onBlur={(event) => {
  //         Logger.log(event);
  //         props.setState(event.target.value);
  //       }}
  //       defaultValue={props.state}
  //     />
  //   </Form.Group>
  // );
  return (
    <Form.Group className="mb-3" controlId={props.id}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        type={props.type}
        placeholder={props.placeholder}
        required={props.requred}
        ref={ref}
        onChange={(event) => {
          Logger.log(event);
          props.setState(event.target.value);
        }}
        value={props.state}
      />
    </Form.Group>
  );
});

export default TextFieldWithState;

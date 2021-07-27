import React from 'react';
import { Form } from 'react-bootstrap';
import { Logger } from '../../Logger';

const TextField = React.forwardRef((props, ref) => {
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

export default TextField;

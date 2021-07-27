import React from 'react';

const TextField = React.forwardRef((props, ref) => {
  // return (
  //   <div className="mb-3">
  //     <label htmlFor={props.id} className="form-label">
  //       {props.label}
  //     </label>
  //     <input
  //       type={props.type}
  //       className="form-control"
  //       id={props.id}
  //       placeholder={props.placeholder}
  //       required={props.requred}
  //       ref={ref}
  //       onBlur={(event) => props.setState(event.target.value)}
  //       defaultValue={props.state}
  //     />
  //   </div>
  // );
  return (
    <div className="mb-3">
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>
      <input
        type={props.type}
        className="form-control"
        id={props.id}
        placeholder={props.placeholder}
        required={props.requred}
        ref={ref}
        onChange={(event) => {
          console.log(event);
          props.setState(event.target.value);
        }}
        value={props.state}
      />
    </div>
  );
});

export default TextField;

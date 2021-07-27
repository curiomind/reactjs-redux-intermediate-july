import React from 'react';

const TextField = React.forwardRef((props, ref) => {
  return (
    <div className="mb-3">
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>
      <input type={props.type} className="form-control" id={props.id} placeholder={props.placeholder} required={props.requred} ref={ref} />
    </div>
  );
});

export default TextField;

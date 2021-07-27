import React from 'react';

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
    <div className="mb-3">
      <label htmlFor={props.id} className="form-label" style={{ color }}>
        {props.label}
      </label>
      <input
        type={props.type}
        className="form-control"
        id={props.id}
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
    </div>
  );
});

export default TextField;

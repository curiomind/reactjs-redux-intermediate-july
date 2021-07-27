import React from 'react';
import TextField from './TextField';

export default function UseImperativeHandle() {
  const textFieldRef = React.useRef(null);

  const handleBlur = () => {
    console.log(textFieldRef.current);
    textFieldRef.current.blur();
  };

  const hancleClick = () => {
    console.log(textFieldRef.current);
    textFieldRef.current.changeLabelColor('#ff0000');
  };

  console.log('I Renderded');

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12">
          <TextField
            label="Document Title"
            id="documentTitle"
            placeholder="Enter document title"
            type="text"
            ref={textFieldRef}
            onBlur={handleBlur}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <button className="btn btn-primary mb-3" onClick={hancleClick}>
            Change Label Color
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

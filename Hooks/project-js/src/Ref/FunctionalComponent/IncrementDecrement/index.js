import React from 'react';

export default function IncrementDecrement() {
  const countRef = React.useRef(0);
  const resultRef = React.useRef(null);

  const handleIncrement = (event) => {
    event.preventDefault();
    countRef.current++;
    resultRef.current.value = countRef.current;
  };

  const handleDecrement = (event) => {
    event.preventDefault();
    countRef.current--;
    resultRef.current.value = countRef.current;
  };

  console.log('IncrementDecrement rendered!');

  return (
    <React.Fragment>
      <h3>Increment / Decrement</h3>
      <div className="row g-3 mb-3">
        <div className="col-auto">
          <button className="btn btn-primary mb-3" onClick={handleIncrement}>
            Increment
          </button>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary mb-3" onClick={handleDecrement}>
            Decrement
          </button>
        </div>
        <div className="col-auto">
          <label htmlFor="incrementDecrementResult" className="visually-hidden">
            Result
          </label>
          <input type="text" readOnly className="form-control" id="incrementDecrementResult" ref={resultRef} />
        </div>
      </div>
    </React.Fragment>
  );
}

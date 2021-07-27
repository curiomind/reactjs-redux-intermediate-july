import React from 'react';

export default function IncrementDecrement() {
  const [count, setCount] = React.useState(0);

  const handleIncrement = (event) => {
    event.preventDefault();
    setCount(count + 1);
  };

  const handleDecrement = (event) => {
    event.preventDefault();
    setCount(count - 1);
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
          <input type="text" readOnly className="form-control" id="incrementDecrementResult" value={count} />
        </div>
      </div>
    </React.Fragment>
  );
}

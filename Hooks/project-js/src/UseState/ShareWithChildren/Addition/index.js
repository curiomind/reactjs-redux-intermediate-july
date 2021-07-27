import React from 'react';

export default function Addition({ numberOne, numberTwo, result, onNumberOneChange, onNumberTwoChange, calculate }) {
  // const handleNumberTwoChange = (event) => {
  //   setNumberTwo(parseInt(event.target.value, 10));
  // };

  return (
    <React.Fragment>
      <h3>Addition</h3>
      <div className="row g-3 mb-3">
        <div className="col-auto">
          <label htmlFor="additionNumberOne" className="visually-hidden">
            First Number
          </label>
          <input type="text" className="form-control" id="additionNumberOne" onChange={onNumberOneChange} value={numberOne} />
        </div>
        <div className="col-auto">
          <label htmlFor="additionNumberTwo" className="visually-hidden">
            Second Number
          </label>
          <input type="text" className="form-control" id="additionNumberTwo" onChange={onNumberTwoChange} value={numberTwo} />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary mb-3" onClick={calculate}>
            Add
          </button>
        </div>
        <div className="col-auto">
          <label htmlFor="additionResult" className="visually-hidden">
            Result
          </label>
          <input type="text" readOnly className="form-control" id="additionResult" value={result} />
        </div>
      </div>
    </React.Fragment>
  );
}

import React from 'react';

export default function Subtraction({ numberOne, numberTwo, result, onNumberOneChange, onNumberTwoChange, calculate }) {
  return (
    <React.Fragment>
      <h3>Subtraction</h3>
      <div className="row g-3 mb-3">
        <div className="col-auto">
          <label htmlFor="subtractionNumberOne" className="visually-hidden">
            First Number
          </label>
          <input type="text" className="form-control" id="subtractionNumberOne" onChange={onNumberOneChange} value={numberOne} />
        </div>
        <div className="col-auto">
          <label htmlFor="subtractionNumberTwo" className="visually-hidden">
            Second Number
          </label>
          <input type="text" className="form-control" id="subtractionNumberTwo" onChange={onNumberTwoChange} value={numberTwo} />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary mb-3" onClick={calculate}>
            Add
          </button>
        </div>
        <div className="col-auto">
          <label htmlFor="subtractionResult" className="visually-hidden">
            Result
          </label>
          <input type="text" readOnly className="form-control" id="subtractionResult" value={result} />
        </div>
      </div>
    </React.Fragment>
  );
}

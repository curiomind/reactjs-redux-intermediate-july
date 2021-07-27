import React from 'react';

export default function Addition() {
  let numberOne = 100;
  let numberTwo = 0;
  let result = 0;

  const handleNumberOneChange = (event) => {
    numberOne = parseInt(event.target.value, 10);
  };

  const handleNumberTwoChange = (event) => {
    numberTwo = parseInt(event.target.value, 10);
  };

  const calculate = (event) => {
    event.preventDefault();
    result = numberOne + numberTwo;
  };

  return (
    <React.Fragment>
      <h3>Addition</h3>
      <div className="row g-3 mb-3">
        <div className="col-auto">
          <label htmlFor="additionNumberOne" className="visually-hidden">
            First Number
          </label>
          <input type="text" className="form-control" id="additionNumberOne" onChange={handleNumberOneChange} value={numberOne} />
        </div>
        <div className="col-auto">
          <label htmlFor="additionNumberTwo" className="visually-hidden">
            Second Number
          </label>
          <input type="text" className="form-control" id="additionNumberTwo" onChange={handleNumberTwoChange} value={numberTwo} />
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

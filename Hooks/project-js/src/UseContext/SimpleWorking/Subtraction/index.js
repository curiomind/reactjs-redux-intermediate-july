import React from 'react';
import { SimpleContext } from '../Context';

export default function Subtraction() {
  const { state, dispatch } = React.useContext(SimpleContext);

  const handleNumberOneChange = (event) => {
    dispatch({ type: 'subtractionNumberOne', payload: parseInt(event.target.value, 10) });
  };

  const handleNumberTwoChange = (event) => {
    dispatch({ type: 'subtractionNumberTwo', payload: parseInt(event.target.value, 10) });
  };

  const calculate = (event) => {
    event.preventDefault();
    dispatch({ type: 'subtractionCalculdate' });
  };

  return (
    <React.Fragment>
      <h3>Subtraction</h3>
      <div className="row g-3 mb-3">
        <div className="col-auto">
          <label htmlFor="subtractionNumberOne" className="visually-hidden">
            First Number
          </label>
          <input type="text" className="form-control" id="subtractionNumberOne" onChange={handleNumberOneChange} value={state.subtractionNumberOne} />
        </div>
        <div className="col-auto">
          <label htmlFor="subtractionNumberTwo" className="visually-hidden">
            Second Number
          </label>
          <input type="text" className="form-control" id="subtractionNumberTwo" onChange={handleNumberTwoChange} value={state.subtractionNumberTwo} />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary mb-3" onClick={calculate}>
            Subtract
          </button>
        </div>
        <div className="col-auto">
          <label htmlFor="subtractionResult" className="visually-hidden">
            Result
          </label>
          <input type="text" readOnly className="form-control" id="subtractionResult" value={state.subtractionResult} />
        </div>
      </div>
    </React.Fragment>
  );
}

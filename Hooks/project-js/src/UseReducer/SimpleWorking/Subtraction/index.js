import React from 'react';
import { subtractionInitialState, subtractionReducer } from '../../Reducers/Subtraction';

export default function Subtraction() {
  const [state, dispatch] = React.useReducer(subtractionReducer, subtractionInitialState);

  const handleNumberOneChange = (event) => {
    dispatch({ type: 'saveNumberOne', payload: parseInt(event.target.value, 10) });
  };

  const handleNumberTwoChange = (event) => {
    dispatch({ type: 'saveNumberTwo', payload: parseInt(event.target.value, 10) });
  };

  const calculate = (event) => {
    event.preventDefault();
    dispatch({ type: 'calculdate' });
  };

  return (
    <React.Fragment>
      <h3>Subtraction</h3>
      <div className="row g-3 mb-3">
        <div className="col-auto">
          <label htmlFor="subtractionNumberOne" className="visually-hidden">
            First Number
          </label>
          <input type="text" className="form-control" id="subtractionNumberOne" onChange={handleNumberOneChange} value={state.numberOne} />
        </div>
        <div className="col-auto">
          <label htmlFor="subtractionNumberTwo" className="visually-hidden">
            Second Number
          </label>
          <input type="text" className="form-control" id="subtractionNumberTwo" onChange={handleNumberTwoChange} value={state.numberTwo} />
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
          <input type="text" readOnly className="form-control" id="subtractionResult" value={state.result} />
        </div>
      </div>
    </React.Fragment>
  );
}

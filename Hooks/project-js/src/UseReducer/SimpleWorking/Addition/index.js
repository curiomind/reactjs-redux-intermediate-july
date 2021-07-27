import React, { useReducer } from 'react';
import { additionInitialState, additionReducer } from '../../Reducers/Addition';

export default function Addition() {
  const [state, dispatch] = useReducer(additionReducer, additionInitialState);

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
      <h3>Addition</h3>
      <div className="row g-3 mb-3">
        <div className="col-auto">
          <label htmlFor="additionNumberOne" className="visually-hidden">
            First Number
          </label>
          <input type="text" className="form-control" id="additionNumberOne" onChange={handleNumberOneChange} value={state.numberOne} />
        </div>
        <div className="col-auto">
          <label htmlFor="additionNumberTwo" className="visually-hidden">
            Second Number
          </label>
          <input type="text" className="form-control" id="additionNumberTwo" onChange={handleNumberTwoChange} value={state.numberTwo} />
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
          <input type="text" readOnly className="form-control" id="additionResult" value={state.result} />
        </div>
      </div>
    </React.Fragment>
  );
}

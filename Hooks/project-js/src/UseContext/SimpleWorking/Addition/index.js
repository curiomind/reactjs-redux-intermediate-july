import React from 'react';
import { SimpleContext } from '../Context';

export default function Addition() {
  const { state, dispatch } = React.useContext(SimpleContext);

  const handleNumberOneChange = (event) => {
    dispatch({ type: 'saveAdditionNumberOne', payload: parseInt(event.target.value, 10) });
  };

  const handleNumberTwoChange = (event) => {
    dispatch({ type: 'saveAdditionNumberTwo', payload: parseInt(event.target.value, 10) });
  };

  const calculate = (event) => {
    event.preventDefault();
    dispatch({ type: 'additionCalculdate' });
  };

  return (
    <React.Fragment>
      <h3>Addition</h3>
      <div className="row g-3 mb-3">
        <div className="col-auto">
          <label htmlFor="additionNumberOne" className="visually-hidden">
            First Number
          </label>
          <input type="text" className="form-control" id="additionNumberOne" onChange={handleNumberOneChange} value={state.additionNumberOne} />
        </div>
        <div className="col-auto">
          <label htmlFor="additionNumberTwo" className="visually-hidden">
            Second Number
          </label>
          <input type="text" className="form-control" id="additionNumberTwo" onChange={handleNumberTwoChange} value={state.additionNumberTwo} />
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
          <input type="text" readOnly className="form-control" id="additionResult" value={state.additionResult} />
        </div>
      </div>
    </React.Fragment>
  );
}

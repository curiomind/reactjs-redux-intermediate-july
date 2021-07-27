import React from 'react';
import { incrementDecrementInitialState, incrementDecrementReducer } from '../../Reducers/IncrementDecrement';

export default function IncrementDecrement() {
  const [state, dispatch] = React.useReducer(incrementDecrementReducer, incrementDecrementInitialState);

  const handleIncrement = (event) => {
    event.preventDefault();
    dispatch({ type: 'increment' });
  };

  const handleDecrement = (event) => {
    event.preventDefault();
    dispatch({ type: 'decrement' });
  };

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
          <input type="text" readOnly className="form-control" id="incrementDecrementResult" value={state.count} />
        </div>
      </div>
    </React.Fragment>
  );
}

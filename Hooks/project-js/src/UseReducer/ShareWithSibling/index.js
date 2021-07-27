import React from 'react';
import IncrementDecrement from './IncrementDecrement';
import { incrementDecrementInitialState, incrementDecrementReducer } from '../Reducers/IncrementDecrement';

export default function UseReducerWithSibling() {
  const [state, dispatch] = React.useReducer(incrementDecrementReducer, incrementDecrementInitialState);

  return (
    <React.Fragment>
      <IncrementDecrement state={state} dispatch={dispatch} id="one" />

      <IncrementDecrement state={state} dispatch={dispatch} id="two" />

      <h4>Result on Parent</h4>
      <div className="mb-3 row">
        <label htmlFor="parentCountResult" className="col-sm-2 col-form-label">
          Count Result
        </label>
        <div className="col-sm-10">
          <input type="text" readOnly className="form-control-plaintext" id="parentCountResult" value={state.count} />
        </div>
      </div>
    </React.Fragment>
  );
}

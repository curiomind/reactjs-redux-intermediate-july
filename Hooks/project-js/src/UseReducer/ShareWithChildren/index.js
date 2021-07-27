import React, { useReducer } from 'react';
import Addition from './Addition';
import Subtraction from './Subtraction';
import IncrementDecrement from './IncrementDecrement';
import { initialState, reducer } from '../Reducers/Children';

export default function UseReducerShareWithChildran() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = (event) => {
    event.preventDefault();
    dispatch({ type: 'increment' });
  };

  const handleDecrement = (event) => {
    event.preventDefault();
    dispatch({ type: 'decrement' });
  };

  const handleAdditionNumberOneChange = (event) => {
    dispatch({ type: 'saveAdditionNumberOne', payload: parseInt(event.target.value, 10) });
  };

  const handleAdditionNumberTwoChange = (event) => {
    dispatch({ type: 'saveAdditionNumberTwo', payload: parseInt(event.target.value, 10) });
  };

  const addition = (event) => {
    event.preventDefault();
    dispatch({ type: 'additionCalculdate' });
  };

  const handleSubtractionNumberOneChange = (event) => {
    dispatch({ type: 'subtractionNumberOne', payload: parseInt(event.target.value, 10) });
  };

  const handleSubtractionNumberTwoChange = (event) => {
    dispatch({ type: 'subtractionNumberTwo', payload: parseInt(event.target.value, 10) });
  };

  const subtraction = (event) => {
    event.preventDefault();
    dispatch({ type: 'subtractionCalculdate' });
  };

  return (
    <React.Fragment>
      <Addition
        numberOne={state.additionNumberOne}
        numberTwo={state.additionNumberTwo}
        result={state.additionResult}
        onNumberOneChange={handleAdditionNumberOneChange}
        onNumberTwoChange={handleAdditionNumberTwoChange}
        calculate={addition}
      />
      <Subtraction
        numberOne={state.subtractionNumberOne}
        numberTwo={state.subtractionNumberTwo}
        result={state.subtractionResult}
        onNumberOneChange={handleSubtractionNumberOneChange}
        onNumberTwoChange={handleSubtractionNumberTwoChange}
        calculate={subtraction}
      />
      <IncrementDecrement count={state.count} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />

      <h4>Result on Parent</h4>
      <div className="mb-3 row">
        <label htmlFor="parentAdditionResult" className="col-sm-2 col-form-label">
          Addition Result
        </label>
        <div className="col-sm-10">
          <input type="text" readOnly className="form-control-plaintext" id="parentAdditionResult" value={state.additionResult} />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="parentSubtractionResult" className="col-sm-2 col-form-label">
          Subtraction Result
        </label>
        <div className="col-sm-10">
          <input type="text" readOnly className="form-control-plaintext" id="parentSubtractionResult" value={state.subtractionResult} />
        </div>
      </div>
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

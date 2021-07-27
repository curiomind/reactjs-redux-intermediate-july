import React, { useState } from 'react';
import Addition from './Addition';
import Subtraction from './Subtraction';
import IncrementDecrement from './IncrementDecrement';

export default function UseStateShareWithChildran() {
  const [additionNumberOne, setAdditionNumberOne] = useState(0);
  const [additionNumberTwo, setAdditionNumberTwo] = useState(0);
  const [additionResult, setAdditionResult] = useState(0);

  const [subtractionNumberOne, setSubtractionNumberOne] = useState(0);
  const [subtractionNumberTwo, setSubtractionNumberTwo] = useState(0);
  const [subtractionResult, setSubtractionResult] = useState(0);

  const [count, setCount] = React.useState(0);

  const handleIncrement = (event) => {
    event.preventDefault();
    setCount(count + 1);
  };

  const handleDecrement = (event) => {
    event.preventDefault();
    setCount(count - 1);
  };

  const handleAdditionNumberOneChange = (event) => {
    setAdditionNumberOne(parseInt(event.target.value, 10));
  };

  const handleAdditionNumberTwoChange = (event) => {
    setAdditionNumberTwo(parseInt(event.target.value, 10));
  };

  const addition = (event) => {
    event.preventDefault();
    setAdditionResult(additionNumberOne + additionNumberTwo);
  };

  const handleSubtractionNumberOneChange = (event) => {
    setSubtractionNumberOne(parseInt(event.target.value, 10));
  };

  const handleSubtractionNumberTwoChange = (event) => {
    setSubtractionNumberTwo(parseInt(event.target.value, 10));
  };

  const subtraction = (event) => {
    event.preventDefault();
    setSubtractionResult(subtractionNumberOne - subtractionNumberTwo);
  };

  return (
    <React.Fragment>
      <Addition
        numberOne={additionNumberOne}
        numberTwo={additionNumberTwo}
        result={additionResult}
        onNumberOneChange={handleAdditionNumberOneChange}
        onNumberTwoChange={handleAdditionNumberTwoChange}
        calculate={addition}
      />
      <Subtraction
        numberOne={subtractionNumberOne}
        numberTwo={subtractionNumberTwo}
        result={subtractionResult}
        onNumberOneChange={handleSubtractionNumberOneChange}
        onNumberTwoChange={handleSubtractionNumberTwoChange}
        calculate={subtraction}
      />
      {/* <Subtraction
        numberOne={subtractionNumberOne}
        numberTwo={subtractionNumberTwo}
        result={subtractionResult}
        onNumberOneChange={handleSubtractionNumberOneChange}
        onNumberTwoChange={handleSubtractionNumberTwoChange}
        calculate={addition}
      /> */}
      <IncrementDecrement count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />

      <h4>Result on Parent</h4>
      <div className="mb-3 row">
        <label htmlFor="parentAdditionResult" className="col-sm-2 col-form-label">
          Addition Result
        </label>
        <div className="col-sm-10">
          <input type="text" readOnly className="form-control-plaintext" id="parentAdditionResult" value={additionResult} />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="parentSubtractionResult" className="col-sm-2 col-form-label">
          Subtraction Result
        </label>
        <div className="col-sm-10">
          <input type="text" readOnly className="form-control-plaintext" id="parentSubtractionResult" value={subtractionResult} />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="parentCountResult" className="col-sm-2 col-form-label">
          Count Result
        </label>
        <div className="col-sm-10">
          <input type="text" readOnly className="form-control-plaintext" id="parentCountResult" value={count} />
        </div>
      </div>
    </React.Fragment>
  );
}

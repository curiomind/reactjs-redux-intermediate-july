import React, { useState } from 'react';
import IncrementDecrement from './IncrementDecrement';

export default function UseStateShareWithSibling() {
  const [countResult, setCountResult] = useState(0);

  const handleIncrementDecrement = (count) => {
    setCountResult(count);
  };

  return (
    <React.Fragment>
      <IncrementDecrement countResult={countResult} onIncrementDecrement={handleIncrementDecrement} id="one" />

      <IncrementDecrement countResult={countResult} onIncrementDecrement={handleIncrementDecrement} id="two" />

      <h4>Result on Parent</h4>
      <div className="mb-3 row">
        <label htmlFor="parentCountResult" className="col-sm-2 col-form-label">
          Count Result
        </label>
        <div className="col-sm-10">
          <input type="text" readOnly className="form-control-plaintext" id="parentCountResult" value={countResult} />
        </div>
      </div>
    </React.Fragment>
  );
}

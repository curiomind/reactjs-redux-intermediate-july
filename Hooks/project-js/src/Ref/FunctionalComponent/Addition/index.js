import React from 'react';

export default function Addition() {
  const numberOneRef = React.useRef(null);
  const numberTwoRef = React.useRef(null);
  const resultRef = React.useRef(null);

  const calculate = (event) => {
    event.preventDefault();
    resultRef.current.value = parseInt(numberOneRef.current.value, 10) + parseInt(numberTwoRef.current.value, 10);
  };

  React.useLayoutEffect(() => {
    numberOneRef.current.value = 0;
    numberTwoRef.current.value = 0;
    resultRef.current.value = 0;
  }, []);

  console.log('Addition rendered!');

  return (
    <React.Fragment>
      <h3>Addition</h3>
      <div className="row g-3 mb-3">
        <div className="col-auto">
          <label htmlFor="additionNumberOne" className="visually-hidden">
            First Number
          </label>
          <input type="text" className="form-control" id="additionNumberOne" ref={numberOneRef} />
        </div>
        <div className="col-auto">
          <label htmlFor="additionNumberTwo" className="visually-hidden">
            Second Number
          </label>
          <input type="text" className="form-control" id="additionNumberTwo" ref={numberTwoRef} />
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
          <input type="text" readOnly className="form-control" id="additionResult" ref={resultRef} />
        </div>
      </div>
    </React.Fragment>
  );
}

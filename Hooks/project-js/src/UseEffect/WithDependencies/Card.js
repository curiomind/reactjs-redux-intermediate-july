/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
// import { initialState } from './InitialState';

// const initialState = { count: 0 };

export default function Card({ onMessage }) {
  const [count, setCount] = React.useState({ count: 0 });
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    onMessage(`You clicked the button ClickMe ${count.count} times.`);
  }, [count]);

  const handleClickMe = (event) => {
    event.preventDefault();
    setCount({ count: count.count + 1 });
  };

  const handleShow = (event) => {
    event.preventDefault();
    setShow(!show);
  };

  return (
    <div className="card mt-2" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

        <button className="btn btn-primary me-2" onClick={handleClickMe}>
          ClickMe
        </button>
        <button className="btn btn-primary" onClick={handleShow}>
          Show Message
        </button>

        {show ? (
          <div className="alert alert-info mt-2" role="alert">
            Hellow World!
          </div>
        ) : null}
      </div>
    </div>
  );
}

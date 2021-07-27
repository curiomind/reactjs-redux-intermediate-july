/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

export default function Card({ onMessage }) {
  const [clickMeCount, setClickMeCount] = React.useState(0);
  const [showMessageCount, setShowMessageCount] = React.useState(0);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    onMessage(`You clicked ClickMe ${clickMeCount} times and ShowMessage ${showMessageCount} times.`);
  });

  const handleClickMe = (event) => {
    event.preventDefault();
    setClickMeCount(clickMeCount + 1);
  };

  const handleShow = (event) => {
    event.preventDefault();
    setShowMessageCount(showMessageCount + 1);
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
          ShowMessage
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

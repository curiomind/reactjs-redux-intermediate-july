/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

export default function Card({ onMessage }) {
  React.useEffect(() => {
    onMessage('Card Loaded');
  }, []);

  return (
    <div className="card mt-2" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  );
}

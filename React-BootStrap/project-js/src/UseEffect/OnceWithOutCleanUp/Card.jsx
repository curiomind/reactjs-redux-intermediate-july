/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Card as BSCard } from 'react-bootstrap';

export default function Card({ onMessage }) {
  React.useEffect(() => {
    onMessage('Card Loaded');
  }, []);

  return (
    <BSCard className="mt-2" style={{ width: '18rem' }}>
      <BSCard.Body>
        <BSCard.Title>Card title</BSCard.Title>
        <BSCard.Subtitle className="card-subtitle mb-2 text-muted">Card subtitle</BSCard.Subtitle>
        <BSCard.Text className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
        </BSCard.Text>
      </BSCard.Body>
    </BSCard>
  );
}

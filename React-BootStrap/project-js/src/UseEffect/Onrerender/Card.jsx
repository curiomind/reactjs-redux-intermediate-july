/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Card as BSCard, Button, Alert } from 'react-bootstrap';

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
    <BSCard className="mt-2" style={{ width: '18rem' }}>
      <BSCard.Body>
        <BSCard.Title>Card title</BSCard.Title>
        <BSCard.Subtitle className="card-subtitle mb-2 text-muted">Card subtitle</BSCard.Subtitle>
        <BSCard.Text className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
        </BSCard.Text>

        <Button variant="primary" className="me-2" onClick={handleClickMe}>
          ClickMe
        </Button>

        <Button variant="primary" onClick={handleShow}>
          ShowMessage
        </Button>

        {show ? (
          <Alert variant="info" className="mt-2">
            Hellow World!
          </Alert>
        ) : null}
      </BSCard.Body>
    </BSCard>
  );
}

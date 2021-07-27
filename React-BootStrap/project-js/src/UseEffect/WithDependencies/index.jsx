import React from 'react';
import { Alert } from 'react-bootstrap';
import Card from './Card';

export default function UseEffectWithDependencies() {
  const [messageFromCard, setMessageFromCard] = React.useState('');

  const handleMessage = (message) => {
    setMessageFromCard(message);
  };

  return (
    <>
      {messageFromCard !== '' ? (
        <Alert variant="info" className="mb-2">
          {messageFromCard}
        </Alert>
      ) : null}

      <Card onMessage={handleMessage} />
    </>
  );
}

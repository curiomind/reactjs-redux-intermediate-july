import React from 'react';
import { Alert } from 'react-bootstrap';
import Card from './Card';

export default function UseEffectOnReRender(): JSX.Element {
  const [messageFromCard, setMessageFromCard] = React.useState<string>('');

  const handleMessage = (message: string) => {
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

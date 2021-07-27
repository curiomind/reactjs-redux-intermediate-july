import React from 'react';
import { Alert, Button } from 'react-bootstrap';
import Card from './Card';

export default function UseEffectOnceWithOutCleanUp() {
  const [messageFromCard, setMessageFromCard] = React.useState('');
  const [visible, setVisible] = React.useState(false);

  const hnadleButtonClick = (event) => {
    event.preventDefault();
    setVisible(!visible);
  };

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

      <Alert variant={visible ? 'success' : 'danger'} className="mb2">
        {visible ? 'Card is visible' : 'Card is not visible'}
      </Alert>

      <Button variant="primary" size="lg" onClick={hnadleButtonClick}>
        {visible ? 'Hide' : 'Show'}
      </Button>

      {visible ? <Card onMessage={handleMessage} /> : null}
    </>
  );
}

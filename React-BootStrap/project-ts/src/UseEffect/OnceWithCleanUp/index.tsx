import React from 'react';
import { useHistory } from 'react-router-dom';
import { Alert, Button } from 'react-bootstrap';
import Card from './Card';

export default function UseEffectOnceWithCleanUp(): JSX.Element {
  const [messageFromCard, setMessageFromCard] = React.useState<string>('');
  const [visible, setVisible] = React.useState<boolean>(false);
  const history = useHistory();

  const hnadleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setVisible(!visible);
  };

  const handleMessage = (message: string) => {
    setMessageFromCard(message);
  };

  return (
    <>
      <Button variant="primary" size="lg" onClick={() => history.goBack()}>
        Back
      </Button>
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

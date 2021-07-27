import React from 'react';
import { Alert, Button } from 'react-bootstrap';
import Card from './Card';

export default function UseEffectAllImplementationInOnePlace() {
  const [clickMeMessage, setClickMeMessage] = React.useState('');
  const [showMessage, setShowMessage] = React.useState('');
  const [messageFromCard, setMessageFromCard] = React.useState('');
  const [visible, setVisible] = React.useState(false);

  const hnadleButtonClick = (event) => {
    event.preventDefault();
    setVisible(!visible);
  };

  const handleMessage = (message) => {
    setMessageFromCard(message);
  };

  const handleClickMeMessage = (message) => {
    setClickMeMessage(message);
  };

  const handleShowMessage = (message) => {
    setShowMessage(message);
  };

  return (
    <>
      {messageFromCard !== '' ? (
        <Alert variant="dark" className="mb-2">
          <strong>Message from Load / Unload Component: </strong> {messageFromCard}
        </Alert>
      ) : null}

      {clickMeMessage !== '' ? (
        <Alert variant="warning" className="mb-2">
          <strong>Message from ClickMe Button: </strong>
          {clickMeMessage}
        </Alert>
      ) : null}

      {showMessage !== '' ? (
        <Alert variant="primary" className="mb-2">
          <strong>Message from ShowMessage Button: </strong> {showMessage}
        </Alert>
      ) : null}

      <Alert variant={visible ? 'success' : 'danger'} className="mb2">
        {visible ? 'Card is visible' : 'Card is not visible'}
      </Alert>

      <Button variant="primary" size="lg" onClick={hnadleButtonClick}>
        {visible ? 'Hide' : 'Show'}
      </Button>

      {visible ? <Card onMessage={handleMessage} onClickMessage={handleClickMeMessage} onShowMessage={handleShowMessage} /> : null}
    </>
  );
}

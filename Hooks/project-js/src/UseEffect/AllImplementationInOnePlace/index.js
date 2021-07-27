import React from 'react';
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
    <React.Fragment>
      {messageFromCard !== '' ? (
        <div className="alert alert-dark mb-2" role="alert">
          <strong>Message from Load / Unload Component: </strong> {messageFromCard}
        </div>
      ) : null}

      {clickMeMessage !== '' ? (
        <div className="alert alert-warning mb-2" role="alert">
          <strong>Message from ClickMe Button: </strong>
          {clickMeMessage}
        </div>
      ) : null}

      {showMessage !== '' ? (
        <div className="alert alert-primary mb-2" role="alert">
          <strong>Message from ShowMessage Button: </strong> {showMessage}
        </div>
      ) : null}

      <div className={visible ? 'alert alert-success mb2' : 'alert alert-danger mb2'} role="alert">
        {visible ? 'Card is visible' : 'Card is not visible'}
      </div>

      <button className="btn btn-lg btn-primary" onClick={hnadleButtonClick}>
        {visible ? 'Hide' : 'Show'}
      </button>

      {visible ? <Card onMessage={handleMessage} onClickMessage={handleClickMeMessage} onShowMessage={handleShowMessage} /> : null}
    </React.Fragment>
  );
}

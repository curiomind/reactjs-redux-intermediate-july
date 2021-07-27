import React from 'react';
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
    <React.Fragment>
      {messageFromCard !== '' ? (
        <div className="alert alert-info mb-2" role="alert">
          {messageFromCard}
        </div>
      ) : null}

      <div className={visible ? 'alert alert-success mb2' : 'alert alert-danger mb2'} role="alert">
        {visible ? 'Card is visible' : 'Card is not visible'}
      </div>

      <button className="btn btn-lg btn-primary" onClick={hnadleButtonClick}>
        {visible ? 'Hide' : 'Show'}
      </button>

      {visible ? <Card onMessage={handleMessage} /> : null}
    </React.Fragment>
  );
}

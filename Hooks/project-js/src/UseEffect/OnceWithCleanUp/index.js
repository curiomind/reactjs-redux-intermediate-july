import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from './Card';

export default function UseEffectOnceWithCleanUp() {
  const [messageFromCard, setMessageFromCard] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const history = useHistory();

  const hnadleButtonClick = (event) => {
    event.preventDefault();
    setVisible(!visible);
  };

  const handleMessage = (message) => {
    setMessageFromCard(message);
  };

  return (
    <React.Fragment>
      <button className="btn btn-primary btn-lg" onClick={() => history.goBack()}>
        Back
      </button>
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

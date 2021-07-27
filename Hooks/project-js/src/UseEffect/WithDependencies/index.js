import React from 'react';
import Card from './Card';

export default function UseEffectWithDependencies() {
  const [messageFromCard, setMessageFromCard] = React.useState('');

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

      <Card onMessage={handleMessage} />
    </React.Fragment>
  );
}

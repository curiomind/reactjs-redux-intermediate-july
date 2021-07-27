import React from 'react';
import { Alert } from 'react-bootstrap';
import { Logger } from '../../../Logger';

function FullNamePure({ fullName }) {
  React.useEffect(() => {
    Logger.log('Full Name Pure Component: Loaded');

    return () => {
      Logger.log('Full Name Pure Component: Unloaded');
    };
  }, []);

  React.useEffect(() => {
    Logger.log('Full Name Pure Component: Updated');
  });

  return (
    <Alert variant="primary" className="mb-2">
      Full Name: {fullName}
    </Alert>
  );
}

export default React.memo(FullNamePure);

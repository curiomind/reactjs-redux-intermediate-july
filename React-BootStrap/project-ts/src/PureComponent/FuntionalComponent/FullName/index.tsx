import React from 'react';
import { Alert } from 'react-bootstrap';
import { Logger } from '../../../Logger';

interface ComponentProps {
  fullName: string;
}

export default function FullName({ fullName }: ComponentProps): JSX.Element {
  React.useEffect(() => {
    Logger.log('Full Name Component: Loaded');

    return () => {
      Logger.log('Full Name Component: Unloaded');
    };
  }, []);

  React.useEffect(() => {
    Logger.log('Full Name Component: Updated');
  });

  return (
    <Alert variant="info" className="mb-2">
      Full Name: {fullName}
    </Alert>
  );
}

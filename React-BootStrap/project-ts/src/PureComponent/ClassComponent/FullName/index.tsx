import React from 'react';
import { Alert } from 'react-bootstrap';
import { Logger } from '../../../Logger';

interface ComponentProps {
  fullName: string;
}

export default class FullName extends React.Component<ComponentProps> {
  componentDidMount() {
    Logger.log('Full Name Component: Loaded');
  }

  componentDidUpdate() {
    Logger.log('Full Name Component: Updated');
  }

  componentWillUnmount() {
    Logger.log('Full Name Component: Unloaded');
  }

  render() {
    const { fullName } = this.props;
    return (
      <Alert variant="info" className="mb-2">
        Full Name: {fullName}
      </Alert>
    );
  }
}

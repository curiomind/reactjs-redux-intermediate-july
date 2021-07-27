import React from 'react';
import { Alert } from 'react-bootstrap';
import { Logger } from '../../../Logger';

interface ComponentProps {
  fullName: string;
}

export default class FullNamePure extends React.PureComponent<ComponentProps> {
  componentDidMount() {
    Logger.log('Full Name Pure Component: Loaded');
  }

  componentDidUpdate() {
    Logger.log('Full Name Pure Component: Updated');
  }

  componentWillUnmount() {
    Logger.log('Full Name Pure Component: Unloaded');
  }

  render() {
    const { fullName } = this.props;

    return (
      <Alert variant="success" className="mb-2">
        Full Name: {fullName}
      </Alert>
    );
  }
}

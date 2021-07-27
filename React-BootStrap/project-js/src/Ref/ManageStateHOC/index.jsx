/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Logger } from '../../Logger';

export default function manageState(Component) {
  class ManageState extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        [props.stateKey]: '',
      };

      this.updateState = this.updateState.bind(this);
    }

    componentDidUpdate() {
      const { stateKey } = this.props;
      const stateValues = { ...this.state };
      Logger.log(`${stateKey}: ${stateValues[stateKey]}`);
    }

    updateState(value) {
      const { stateKey } = this.props;
      this.setState({ [stateKey]: value });
    }

    render() {
      const { forwardedRef, stateKey, ...rest } = this.props;
      const stateValues = { ...this.state };
      return <Component ref={forwardedRef} state={stateValues[stateKey]} setState={this.updateState} {...rest} />;
    }
  }

  return React.forwardRef((props, ref) => {
    return <ManageState {...props} forwardedRef={ref} />;
  });
}

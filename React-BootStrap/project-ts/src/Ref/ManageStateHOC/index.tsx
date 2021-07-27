/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Logger } from '../../Logger';

export default function manageState(WapperComponent: any) {
  class ManageState extends React.Component<any, any> {
    constructor(props: any) {
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

    updateState(value: string) {
      const { stateKey } = this.props;
      this.setState({ [stateKey]: value });
    }

    render() {
      const { forwardedRef, stateKey, ...rest } = this.props;
      const stateValues = { ...this.state };
      return <WapperComponent ref={forwardedRef} state={stateValues[stateKey]} setState={this.updateState} {...rest} />;
    }
  }

  return React.forwardRef<HTMLInputElement, any>((props, ref) => {
    return <ManageState {...props} forwardedRef={ref} />;
  });
}

import React from 'react';

export default function manageState(Component) {
  class ManageState extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        [props.stateKey]: '',
      };
    }

    updateState(value) {
      this.setState({ [this.props.stateKey]: value });
    }

    componentDidUpdate() {
      console.log(`${this.props.stateKey}: ${this.state[this.props.stateKey]}`);
    }

    render() {
      const { forwardedRef, ...rest } = this.props;
      return <Component ref={forwardedRef} state={this.state[this.props.stateKey]} setState={this.updateState.bind(this)} {...rest} />;
    }
  }

  return React.forwardRef((props, ref) => {
    return <ManageState {...props} forwardedRef={ref} />;
  });
}

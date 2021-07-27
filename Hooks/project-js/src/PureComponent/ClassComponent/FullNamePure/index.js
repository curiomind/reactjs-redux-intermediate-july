import React from 'react';

export default class FullNamePure extends React.PureComponent {
  componentDidMount() {
    console.log('Full Name Pure Component: Loaded');
  }

  componentDidUpdate() {
    console.log('Full Name Pure Component: Updated');
  }

  componentWillUnmount() {
    console.log('Full Name Pure Component: Unloaded');
  }

  render() {
    return (
      <div className="alert alert-success mb-2" role="alert">
        Full Name: {this.props.fullName}
      </div>
    );
  }
}

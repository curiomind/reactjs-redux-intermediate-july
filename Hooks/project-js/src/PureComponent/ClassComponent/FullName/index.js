import React from 'react';

export default class FullName extends React.Component {
  componentDidMount() {
    console.log('Full Name Component: Loaded');
  }

  componentDidUpdate() {
    console.log('Full Name Component: Updated');
  }

  componentWillUnmount() {
    console.log('Full Name Component: Unloaded');
  }

  render() {
    return (
      <div className="alert alert-info mb-2" role="alert">
        Full Name: {this.props.fullName}
      </div>
    );
  }
}

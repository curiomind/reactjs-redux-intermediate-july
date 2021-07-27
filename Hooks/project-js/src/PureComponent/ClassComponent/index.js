import React from 'react';
import TextField from './TextField';
import FullName from './FullName';
import FullNamePure from './FullNamePure';

export default class PureClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      fullName: '',
    };
  }

  showFullName() {
    let fullName = '';
    if (this.state.firstName && this.state.lastName) {
      fullName = `${this.state.firstName} ${this.state.lastName}`;
    }
    this.setState({ fullName });
  }

  componentDidMount() {
    console.log('Parent Component: Loaded');
  }

  componentDidUpdate() {
    console.log('Parent Component: Updated');
  }

  componentWillUnmount() {
    console.log('Parent Component: Unloaded');
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12">
            <TextField
              label="First Name"
              id="firstName"
              placeholder="Enter your first name"
              type="text"
              requred
              onChange={(event) => this.setState({ firstName: event.target.value })}
              value={this.state.firstName}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <TextField
              label="Last Name"
              id="lastName"
              placeholder="Enter your last name"
              type="text"
              onChange={(event) => this.setState({ lastName: event.target.value })}
              value={this.state.lastName}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <button onClick={this.showFullName.bind(this)} className="btn btn-primary mb-3">
              Show Fullname
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            {this.state.fullName ? (
              <React.Fragment>
                <FullName fullName={this.state.fullName} />
                <FullNamePure fullName={this.state.fullName} />
              </React.Fragment>
            ) : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

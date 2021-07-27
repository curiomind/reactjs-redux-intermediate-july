import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Logger } from '../../Logger';
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

    this.showFullName = this.showFullName.bind(this);
  }

  componentDidMount() {
    Logger.log('Parent Component: Loaded');
  }

  componentDidUpdate() {
    Logger.log('Parent Component: Updated');
  }

  componentWillUnmount() {
    Logger.log('Parent Component: Unloaded');
  }

  showFullName() {
    const { lastName, firstName } = this.state;
    let newFullName = '';
    if (firstName && lastName) {
      newFullName = `${firstName} ${lastName}`;
    }
    this.setState({ fullName: newFullName });
  }

  render() {
    const { firstName, lastName, fullName } = this.state;

    return (
      <>
        <Row>
          <Col xs={12}>
            <TextField
              label="First Name"
              id="firstName"
              placeholder="Enter your first name"
              type="text"
              requred
              onChange={(event) => this.setState({ firstName: event.target.value })}
              value={firstName}
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <TextField
              label="Last Name"
              id="lastName"
              placeholder="Enter your last name"
              type="text"
              onChange={(event) => this.setState({ lastName: event.target.value })}
              value={lastName}
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Button onClick={this.showFullName} variant="primary" className="mb-3">
              Show Fullname
            </Button>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            {fullName ? (
              <>
                <FullName fullName={fullName} />
                <FullNamePure fullName={fullName} />
              </>
            ) : null}
          </Col>
        </Row>
      </>
    );
  }
}

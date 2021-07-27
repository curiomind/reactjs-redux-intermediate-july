import React from 'react';
import TextField from './TextField';
import FullName from './FullName';
import FullNamePure from './FullNamePure';

export default function PureFunctionalComponent() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [fullName, setFullName] = React.useState('');

  const showFullName = () => {
    let newFullName = '';
    if (firstName && lastName) {
      newFullName = `${firstName} ${lastName}`;
    }
    setFullName(newFullName);
  };

  React.useEffect(() => {
    console.log('Parent Component: Loaded');

    return () => {
      console.log('Parent Component: Unloaded');
    };
  }, []);

  React.useEffect(() => {
    console.log('Parent Component: Updated');
  });

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
            onChange={(event) => setFirstName(event.target.value)}
            value={firstName}
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
            onChange={(event) => setLastName(event.target.value)}
            value={lastName}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <button onClick={showFullName} className="btn btn-primary mb-3">
            Show Fullname
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          {fullName ? (
            <React.Fragment>
              <FullName fullName={fullName} />
              <FullNamePure fullName={fullName} />
            </React.Fragment>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
}

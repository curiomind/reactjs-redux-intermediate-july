import React from 'react';
import manageState from '../ManageStateHOC';
import TextFieldWithState from '../TextFieldWithState';

const FirstName = manageState(TextFieldWithState);
const LastName = manageState(TextFieldWithState);

export default function ForwardRefHOC() {
  const firstNameRef = React.useRef(null);
  const lastNameRef = React.useRef(null);
  const [fullName, setFullName] = React.useState('');

  const showFullName = (event) => {
    event.preventDefault();
    const name = `${firstNameRef.current.value} ${lastNameRef.current.value}`;
    setFullName(name);
  };

  console.log('Rendered');

  return (
    <form onSubmit={showFullName}>
      <div className="row">
        <div className="col-12">
          <FirstName
            label="First Name"
            id="firstName"
            placeholder="Enter your first name"
            type="text"
            ref={firstNameRef}
            stateKey="firstName"
            requred
          />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <LastName label="Last Name" id="lastName" placeholder="Enter your last name" type="text" ref={lastNameRef} stateKey="lastName" requred />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <button type="submit" className="btn btn-primary mb-3">
            Show Fullname
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="alert alert-info" role="alert">
            Your Fullname: {fullName}
          </div>
        </div>
      </div>
    </form>
  );
}

import React from 'react';
import TextField from '../TextField';

export default function PassingRef() {
  const firstNameRef = React.useRef(null);
  const lastNameRef = React.useRef(null);
  const fullNameRef = React.useRef('');
  const [count, setCount] = React.useState(0);
  // const [fullName, setFullName] = React.useState('');

  const showFullName = (event) => {
    event.preventDefault();
    const name = `${firstNameRef.current.value} ${lastNameRef.current.value}`;
    // setFullName(name);
    fullNameRef.current = name;
    setCount(count + 1);
  };

  console.log('I Renderded');

  return (
    <form onSubmit={showFullName}>
      <div className="row">
        <div className="col-12">
          <TextField label="First Name" id="firstName" placeholder="Enter your first name" type="text" ref={firstNameRef} requred />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <TextField label="Last Name" id="lastName" placeholder="Enter your last name" type="text" ref={lastNameRef} requred />
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
            Your Fullname: {fullNameRef.current}
          </div>
        </div>
      </div>
    </form>
  );
}

import React from 'react';

export default function FullName({ fullName }) {
  React.useEffect(() => {
    console.log('Full Name Component: Loaded');

    return () => {
      console.log('Full Name Component: Unloaded');
    };
  }, []);

  React.useEffect(() => {
    console.log('Full Name Component: Updated');
  });

  return (
    <div className="alert alert-info mb-2" role="alert">
      Full Name: {fullName}
    </div>
  );
}

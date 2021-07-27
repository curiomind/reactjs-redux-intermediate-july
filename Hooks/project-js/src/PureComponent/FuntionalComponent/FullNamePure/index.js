import React from 'react';

function FullNamePure({ fullName }) {
  React.useEffect(() => {
    console.log('Full Name Pure Component: Loaded');

    return () => {
      console.log('Full Name Pure Component: Unloaded');
    };
  }, []);

  React.useEffect(() => {
    console.log('Full Name Pure Component: Updated');
  });

  return (
    <div className="alert alert-info mb-2" role="alert">
      Full Name: {fullName}
    </div>
  );
}

export default React.memo(FullNamePure);

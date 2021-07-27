/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

export default function TextField({ id, type, label, placeholder, required, onChange }) {
  React.useEffect(() => {
    console.log(`${label}: Loaded`);

    return () => {
      console.log(`${label}: Unloaded`);
    };
  }, []);

  React.useEffect(() => {
    console.log(`${label}: Updated`);
  });

  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input type={type} className="form-control" id={id} placeholder={placeholder} required={required} onChange={onChange} />
    </div>
  );
}

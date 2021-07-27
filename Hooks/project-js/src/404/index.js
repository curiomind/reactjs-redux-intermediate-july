import React from 'react';
import { useLocation } from 'react-router-dom';

export default function NotFound() {
  const location = useLocation();

  return (
    <React.Fragment>
      <h1 className="text-center">404 Not Found</h1>
      <p>
        <strong>Pathname: </strong> {location.pathname}
      </p>
      <p>
        <strong>Search: </strong> {location.search}
      </p>
    </React.Fragment>
  );
}

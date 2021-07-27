/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

export default function Home() {
  const history = useHistory();
  const match = useRouteMatch('/hook-usestate/simple-working');

  React.useEffect(() => {
    console.log('Home', match);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Welcome to React Training</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <button className="btn btn-primary btn-lg" onClick={() => history.replace('/hook-usestate/simple-working')}>
            UseState
          </button>
        </div>
        <div className="col-3">
          <button className="btn btn-primary btn-lg" onClick={() => history.push('/hook-useeffect/once-with-cleanup')}>
            UseEffect
          </button>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import useCustomState from './useCustomState';

export default function UseCustomeHook() {
  const { state, updateState } = useCustomState({ fullName: '' });

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12">
          <button onClick={() => updateState('fullName', 'Proloy Chakroborty')} className="btn btn-primary mb-3">
            Show Fullname
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-12">{state.fullName}</div>
      </div>
    </React.Fragment>
  );
}

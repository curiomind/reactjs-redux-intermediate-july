import React from 'react';

export const init = {};

const useCustomState = (initialValue) => {
  const [state, setState] = React.useState(initialValue);

  const updateState = (key, value) => {
    setState({ ...state, [key]: value });
  };

  return {
    state,
    updateState,
  };
};

export default useCustomState;

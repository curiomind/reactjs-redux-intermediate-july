import React from 'react';

export const init = {};

interface CustomHooksType {
  state: Record<string, any>;
  updateState: (key: string, value: any) => void;
}

const useCustomState = (initialValue: Record<string, any>): CustomHooksType => {
  const [state, setState] = React.useState(initialValue);

  const updateState = (key: string, value: any) => {
    setState({ ...state, [key]: value });
  };

  return {
    state,
    updateState,
  };
};

export default useCustomState;

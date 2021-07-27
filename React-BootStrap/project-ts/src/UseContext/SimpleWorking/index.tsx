import React from 'react';
import Addition from './Addition';
import Subtraction from './Subtraction';
import IncrementDecrement from './IncrementDecrement';
import { childrenReducer, initialState } from './Reducer';
import { SimpleContext } from './Context';

export default function UseContextSimpleWorking() {
  const [state, dispatch] = React.useReducer(childrenReducer, initialState);

  return (
    <SimpleContext.Provider value={{ state, dispatch }}>
      <>
        <Addition />
        <Subtraction />
        <IncrementDecrement />
      </>
    </SimpleContext.Provider>
  );
}

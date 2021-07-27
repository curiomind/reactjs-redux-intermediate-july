import React from 'react';
import Addition from './Addition';
import Subtraction from './Subtraction';
import IncrementDecrement from './IncrementDecrement';
import { initialState } from './Reducer/InitialState';
import reducer from './Reducer';
import { SimpleContext } from './Context';

export default function UseContextSimpleWorking() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

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

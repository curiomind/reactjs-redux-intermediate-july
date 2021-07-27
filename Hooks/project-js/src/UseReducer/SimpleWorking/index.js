import React from 'react';
import Addition from './Addition';
import Subtraction from './Subtraction';
import IncrementDecrement from './IncrementDecrement';

export default function UseReducerSimpleWorking() {
  return (
    <React.Fragment>
      <Addition />
      <Subtraction />
      <IncrementDecrement />
    </React.Fragment>
  );
}

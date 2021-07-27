import React from 'react';
import Addition from './Addition';
import Subtraction from './Subtraction';
import IncrementDecrement from './IncrementDecrement';

export default function UseReducerSimpleWorking(): JSX.Element {
  return (
    <>
      <Addition />
      <Subtraction />
      <IncrementDecrement />
    </>
  );
}

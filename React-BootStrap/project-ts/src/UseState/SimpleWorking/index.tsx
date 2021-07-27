import React from 'react';
import Addition from './Addition';
import Subtraction from './Subtraction';
import IncrementDecrement from './IncrementDecrement';

export default function UseStateSimpleWorking(): JSX.Element {
  return (
    <>
      <Addition />
      <Subtraction />
      <IncrementDecrement />
    </>
  );
}

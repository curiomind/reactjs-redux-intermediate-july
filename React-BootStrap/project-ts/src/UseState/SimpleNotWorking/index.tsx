import React from 'react';
import Addition from './Addition';
import Subtraction from './Subtraction';
import IncrementDecrement from './IncrementDecrement';

export default function UseStateSimpleNotWorking(): JSX.Element {
  return (
    <>
      <Addition />
      <Subtraction />
      <IncrementDecrement />
    </>
  );
}

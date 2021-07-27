import React from 'react';
import Addition from './Addition';
import Subtraction from './Subtraction';
import IncrementDecrement from './IncrementDecrement';

export default function StateInClassComponent(): JSX.Element {
  return (
    <>
      <Addition />
      <Subtraction />
      <IncrementDecrement />
    </>
  );
}

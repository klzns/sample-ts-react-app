import React from 'react';
import { useLocalValue } from '../useLocalValue';

const FoobarLocal: React.FC = () => {
  const value = useLocalValue();

  return <div>Foobar useLocalValue: {value}</div>;
};

export default FoobarLocal;

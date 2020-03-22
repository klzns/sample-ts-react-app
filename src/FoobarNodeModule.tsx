import React from "react";
import { useNodeModuleValue } from "useNodeModuleValue";

const FoobarNodeModule: React.FC = () => {
  const value = useNodeModuleValue();

  return <div>Foobar useNodeModuleValue: {value}</div>;
};

export default FoobarNodeModule;

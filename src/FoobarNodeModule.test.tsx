import React from "react";
import FoobarNodeModule from "./FoobarNodeModule";
import { render } from "@testing-library/react";
import { useNodeModuleValue } from "useNodeModuleValue";

const mockedUseNodeModuleValue = useNodeModuleValue as jest.Mock<string>;

test("should render", () => {
  mockedUseNodeModuleValue.mockImplementation(() => 'mockImplementation');
  const { getByText, debug } = render(<FoobarNodeModule />);

  debug();

  expect(getByText("Foobar useNodeModuleValue: mockImplementation")).toBeTruthy();
});

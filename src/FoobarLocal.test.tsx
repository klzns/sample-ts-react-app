import React from "react";
import FoobarLocal from "./FoobarLocal";
import { render } from "@testing-library/react";
import { useLocalValue } from "./useLocalValue";
jest.mock('./useLocalValue')

const mockedUseLocalValue = useLocalValue as jest.Mock<string>;

test("should render", () => {
  mockedUseLocalValue.mockImplementation(() => 'mockImplementation');
  const { getByText, debug } = render(<FoobarLocal />);

  debug();

  expect(getByText("Foobar useLocalValue: mockImplementation")).toBeTruthy();
});

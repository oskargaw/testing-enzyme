import React from "react";
import { shallow, mount, render } from "enzyme";

import CounterButton from "./CounterButton";

it("expect to render CounterButton component", () => {
  const mockColor = "red";
  // even if it's a stateful component, we can test it with the 'toMatchSnapshot' method
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it("correctly increment the counter", () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterButton color={mockColor} />);

  //   'find' is a method provided by enzyme
  wrapper.find('[id="counter"]').simulate("click");
  wrapper.find('[id="counter"]').simulate("click");

  //   state grabs the state of our component
  expect(wrapper.state()).toEqual({ count: 2 });

  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 3 });

  wrapper.find('[id="counter"]').simulate("keypress");
  expect(wrapper.state()).toEqual({ count: 3 });

  expect(wrapper.props().color).toEqual("red");
});

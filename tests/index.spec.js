import React from "react";
import ApiPage from "../src/components/ApiPage/ApiPage.js";
import { expect } from "chai";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("HomePage tag test", () => {
  const wrapper = shallow(<ApiPage />);
  it("should be a <div> tag", () => {
    expect(wrapper.type()).to.eql("div");
  });
});

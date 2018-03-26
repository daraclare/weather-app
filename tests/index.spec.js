import React from "react";
import ApiPage from "../src/components/ApiPage/ApiPage.js";
import { expect } from "chai";
import { shallow } from "enzyme";

describe("HomePage tag test", () => {
  const wrapper = shallow(<ApiPage />);
  it("should be a <div> tag", () => {
    expect(wrapper.type()).to.eql("div");
  });
});

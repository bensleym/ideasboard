import React from "react";
import { shallow, mount } from "enzyme";
import IdeasBoard from "../js/IdeaBoard";
import IdeaCreate from "../js/IdeaCreate";

describe("<IdeaBoard />", () => {
  it("renders one <IdeaCreate /> component", () => {
    const ideas = {
      ideas: []
    };
    const wrapper = shallow(<IdeasBoard {...ideas} />);
    expect(wrapper.find(IdeaCreate).length).toBe(1);
  });
});

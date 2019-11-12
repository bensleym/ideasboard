import React from "react";
import { shallow, mount } from "enzyme";
import IdeaCreate from "../js/IdeaCreate";
import Input from "../js/uiComponents/Input";
import Textarea from "../js/uiComponents/Textarea";
import sinon from "sinon";

describe("<IdeaCreate />", () => {
  it("renders without crashing", () => {
    shallow(<IdeaCreate />);
  });

  it("renders one <Input /> component", () => {
    const wrapper = shallow(<IdeaCreate />);
    expect(wrapper.find(Input).length).toBe(1);
  });

  it("renders one <Textarea /> component", () => {
    const wrapper = shallow(<IdeaCreate />);
    expect(wrapper.find(Textarea).length).toBe(1);
  });

  it("Should capture title correctly onChange", () => {
    const wrapper = shallow(<IdeaCreate />);
    expect(wrapper.state().title).toEqual("");

    const props = {
      class: "inputStyle",
      name: "title",
      onChange: wrapper
        .instance()
        .handleChange({ target: { name: "title", value: "new title" } })
    };

    const inputWrapper = shallow(<Input {...props} />);

    expect(inputWrapper.find(".inputStyle").length).toBe(1);
    expect(wrapper.state().title).toEqual("new title");
  });

  it("Should capture description correctly onChange", () => {
    const wrapper = mount(<IdeaCreate />);
    expect(wrapper.state().description).toEqual("");

    const props = {
      id: "ideaDescription",
      class: "textareaFixed",
      name: "description",
      charCounterShow: false,
      charCount: 140,
      onChange: wrapper.instance().handleChange({
        target: { name: "description", value: "New description" }
      })
    };

    const inputWrapper = shallow(<Textarea {...props} />);

    expect(inputWrapper.find(".textareaFixed").length).toBe(1);
    expect(wrapper.state().description).toEqual("New description");
  });
});

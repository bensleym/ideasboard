import React, { Component } from "react";
import styles from "../css/idea/ideaCreate.module.css";
import Input from "./uiComponents/Input";
import Textarea from "./uiComponents/Textarea";

class IdeaCreate extends Component {
  state = {
    title: "",
    description: "",
    charCount: 140,
    charCounterShow: false
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.teaxtAreaCounter();
  };

  handleSubmit = event => {
    event.preventDefault();

    const { onCreate } = this.props;
    const { title, description } = this.state;

    const idea = {
      id: Date.now().toString(),
      title,
      description,
      createdAt: new Date().toLocaleString()
    };

    onCreate(idea);

    this.setState({ title: "", description: "" });
  };

  teaxtAreaCounter() {
    const textAreaId = document.getElementById("ideaDescription");
    const charLength = 140 - textAreaId.value.length;
    if (charLength <= 30) {
      this.setState({ charCount: charLength, charCounterShow: true });
    } else {
      this.setState({ charCount: charLength, charCounterShow: false });
    }
  }

  render() {
    const { title, description } = this.state;
    return (
      <div className={styles.ideaCreate}>
        <form onSubmit={this.handleSubmit}>
          <Input
            state={this.state}
            id="ideaTitle"
            inputType="text"
            name="title"
            labelShow={true}
            label="Title"
            onChange={this.handleChange}
            value={title}
            class="inputStyle"
          />

          <Textarea
            value={description}
            id="ideaDescription"
            name="description"
            onChange={this.handleChange}
            maxLength="140"
            label="Description"
            labelShow={true}
            class="textareaFixed"
            charCounterShow={this.state.charCounterShow}
            charCount={this.state.charCount}
          />

          <input
            type="submit"
            value="Create Idea"
            className={styles.ideaCreateSubmit}
          />
        </form>
        <div id="ideas"></div>
      </div>
    );
  }
}

export default IdeaCreate;

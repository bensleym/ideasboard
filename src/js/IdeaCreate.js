import React, { Component } from "react";
import styles from "../css/idea/ideaCreate.module.css";
import Input from "./uiComponents/input";

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
    console.log(this.state);
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

  Counter = () => {
    if (this.state.charCounterShow) {
      return (
        <p className={styles.ideaCreateCharLength}>
          Characters left {this.state.charCount}
        </p>
      );
    }
    return null;
  };

  render() {
    const { title, description } = this.state;
    console.log(title);
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
          />

          <label htmlFor="ideaDescription" className={styles.ideaCreateLabel}>
            Description
          </label>
          <textarea
            id="ideaDescription"
            className={styles.ideaCreateTextarea}
            name="description"
            onChange={this.handleChange}
            value={description}
            maxLength="140"
          ></textarea>
          {this.state.charCounterShow ? <this.Counter /> : ""}

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

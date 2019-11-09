import React, { Component } from "react";
import styles from "../../css/uiComponents/textarea.module.css";

class Textarea extends Component {
  TextareaLabel = () => {
    return (
      <label htmlFor={this.props.id} className={styles.label}>
        {this.props.label}
      </label>
    );
  };

  Counter = () => {
    if (this.props.charCounterShow) {
      return (
        <p className={styles.createCharLength}>
          Characters left {this.props.charCount}
        </p>
      );
    }
    return null;
  };

  render() {
    return (
      <div>
        {this.props.labelShow ? <this.TextareaLabel /> : ""}
        <textarea
          id={this.props.id}
          className={styles[this.props.class]}
          name={this.props.name}
          onChange={this.props.onChange}
          value={this.props.value}
          maxLength={this.props.maxLength}
        ></textarea>
        {this.props.charCounterShow ? <this.Counter /> : ""}
      </div>
    );
  }
}

export default Textarea;

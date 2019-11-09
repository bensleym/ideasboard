import React, { Component } from "react";
import styles from "../../css/uiComponents/input.module.css";

class Input extends Component {
  InputLabel = () => {
    return (
      <label htmlFor={this.props.id} className={styles.label}>
        {this.props.label}
      </label>
    );
  };

  render() {
    const { onChange } = this.props;
    return (
      <div>
        {this.props.labelShow ? <this.InputLabel /> : ""}
        <input
          type={this.props.inputType}
          id={this.props.id}
          className={styles[this.props.class]}
          name={this.props.name}
          onChange={onChange}
          value={this.props.value}
          autoFocus
        />
      </div>
    );
  }
}

export default Input;

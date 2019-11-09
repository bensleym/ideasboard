import React, { Component } from "react";
import styles from "../../css/idea/ideaCreate.module.css";

class Input extends Component {
  InputLabel = () => {
    return (
      <label htmlFor={this.props.id} className={styles.ideaCreateLabel}>
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
          className={styles.ideaCreateInput}
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

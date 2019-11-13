import React, { Component } from "react";
import styles from "../css/idea/idea.module.css";

class Idea extends Component {
  constructor(props) {
    super(props);

    this.state = props;
  }

  handleEdit(event, handle) {
    const handleId = event.target.dataset.id;

    const handleInput = document.querySelector(
      `[data-${handle}-input-id="${handleId}"]`
    );
    this.handleEvent(event, handleInput);
    handleInput.focus();
  }

  handleChange(event, handle) {
    const inputValue = event.target.value;
    this.setState({ [handle]: inputValue });
  }

  handleBlur(event, handle) {
    const handleId = event.target.dataset.id;

    const handleInput = document.querySelector(
      `[data-${handle}-id="${handleId}"]`
    );

    this.handleEvent(event, handleInput);

    this.createdAtUpdate(handleId);
    this.updateLocalStoreage(event, handleId, handle);
  }

  updateLocalStoreage(event, handleId, handle) {
    const previousState = this.props.state;
    for (let i = 0; i < previousState.length; i += 1) {
      if (previousState[i].id === handleId) {
        previousState[i][handle] = event.target.value;
        previousState[i].hasUpdated = true;
      }
    }
    localStorage.setItem(
      "ideas",
      JSON.stringify({ ideas: [...previousState] })
    );
  }

  handleEvent(event, handle) {
    event.target.classList.remove(styles.ideaShow);

    event.target.classList.add(styles.ideaHide);
    handle.classList.add(styles.ideaShow);
  }

  createdAtUpdate() {
    const { title, description } = this.state;
    if (
      title.trim() !== this.props.title.trim() ||
      description.trim() !== this.props.description.trim()
    ) {
      this.setState({
        createdAt: new Date().toLocaleString(),
        hasUpdated: true,
        hasUpdatedAlert: true
      });
    }
  }

  updatedMessage() {
    if (this.state.hasUpdatedAlert) {
      setTimeout(() => {
        setTimeout(() => {
          this.setState({ hasUpdatedAlert: false });
        }, 4000);
        document.getElementById("ideaUpdateAlert").style.opacity = "0";
      }, 5000);
      return (
        <p className={styles.ideaUpdated} id={"ideaUpdateAlert"}>
          Okay, I love you...
        </p>
      );
    }
  }

  render() {
    return (
      <article className={styles.idea}>
        <button
          className={styles.ideaDelete}
          data-delete-id={this.state.id}
          onClick={event => {
            this.props.onDelete(event);
          }}
        >
          Delete
        </button>
        {this.updatedMessage()}
        <h3
          className={[styles.ideaShow, styles.ideaTitle].join(" ")}
          data-id={this.state.id}
          data-title-id={this.state.id}
          onClick={event => {
            this.handleEdit(event, "title");
          }}
        >
          {this.state.title}
        </h3>
        <input
          type="text"
          className={[styles.ideaHide, styles.ideaInput].join(" ")}
          name="title"
          value={this.state.title}
          data-title-input-id={this.state.id}
          data-id={this.state.id}
          onChange={event => {
            this.handleChange(event, "title");
          }}
          onBlur={event => {
            this.handleBlur(event, "title");
          }}
        />
        <p
          className={styles.ideaShow}
          data-id={this.state.id}
          data-description-id={this.state.id}
          onClick={event => {
            this.handleEdit(event, "description");
          }}
        >
          {this.state.description}
        </p>
        <textarea
          className={[styles.ideaHide, styles.ideaTextarea].join(" ")}
          value={this.state.description}
          data-id={this.state.id}
          data-description-input-id={this.state.id}
          name="description"
          maxLength="140"
          onChange={event => {
            this.handleChange(event, "description");
          }}
          onBlur={event => {
            this.handleBlur(event, "description");
          }}
        ></textarea>

        <p className={styles.ideaCreated}>
          {this.state.hasUpdated ? "Updated at:" : "Created at:"}{" "}
          {this.state.createdAt}
        </p>
      </article>
    );
  }
}

export default Idea;

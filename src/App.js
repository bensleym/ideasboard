import React, { Component } from "react";
import "./App.css";
import IdeaBoard from "./js/IdeaBoard";

export default class App extends Component {
  constructor() {
    super();
    const ideas = JSON.parse(localStorage.getItem("ideas"));
    if (ideas) {
      this.state = { ...ideas };
    } else {
      this.state = {
        ideas: []
      };
    }
  }

  componentDidUpdate() {
    localStorage.setItem("ideas", JSON.stringify(this.state));
  }

  handleCreate = idea => {
    const { ideas } = this.state;
    this.setState({ ideas: [idea, ...ideas] });
  };

  handleDelete = event => {
    const { deleteId } = event.target.dataset;
    let ideas = this.state.ideas;

    ideas = ideas.filter(idea => {
      return idea.id !== deleteId;
    });

    this.setState({ ideas });
  };

  sortBy = (event, idea) => {
    const sortBy = event.target.value;
    idea.sort((a, b) => {
      var ideaA = a[sortBy].toUpperCase();
      var ideaB = b[sortBy].toUpperCase();
      return ideaA < ideaB ? -1 : ideaA > ideaB ? 1 : 0;
    });
    const { ideas } = this.state;
    this.setState({ ideas: [...ideas] });
  };

  render() {
    const { ideas } = this.state;
    return (
      <IdeaBoard
        ideas={this.state.length > 0 ? this.state : ideas}
        onCreate={this.handleCreate}
        onDelete={this.handleDelete}
        sortBy={this.sortBy}
      />
    );
  }
}

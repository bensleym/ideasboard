import React, { Component } from "react";
import "./App.css";
import IdeaBoard from "./js/IdeaBoard";

export default class App extends Component {
  state = {
    ideas: []
  };
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
        ideas={ideas}
        onCreate={this.handleCreate}
        onDelete={this.handleDelete}
        sortBy={this.sortBy}
      />
    );
  }
}

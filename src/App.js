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

  sortBy = (event, idea) => {
    const sortBy = event.target.value;
    console.log(sortBy);
    idea.sort((a, b) => {
      var ideaA = a[sortBy].toUpperCase();
      var ideaB = b[sortBy].toUpperCase();
      return ideaA < ideaB ? -1 : ideaA > ideaB ? 1 : 0;
    });
    const { ideas } = this.state;
    this.setState({ ideas: [...ideas] });
    console.log(this.state);
  };

  render() {
    const { ideas } = this.state;
    return (
      <IdeaBoard
        ideas={ideas}
        onCreate={this.handleCreate}
        sortBy={this.sortBy}
      />
    );
  }
}

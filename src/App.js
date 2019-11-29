import React, { Component } from "react";
import List from "./components/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
      todo: [
        { id: 1, title: "task 1" },
        { id: 2, title: "task 2" },
        { id: 3, title: "task 3" }
      ],
      doing: [],
      done: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ newTask: event.target.value });
  }

  handleSubmit(event) {
    this.setState({
      todo: [
        ...this.state.todo,
        { id: this.state.todo.length + 1, title: this.state.newTask }
      ]
    });
    console.log(this.state.newTask);
    event.preventDefault();
  }

  addTask = task => {
    this.setState({
      todo: [...this.state.todo, task]
    });
  };
  render() {
    return (
      <div className="container">
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"
          type="text/css"
          rel="stylesheet"
        />
        <div class="row">
          <div class="one-third column">
            <List name="To Do" cards={this.state.todo} />
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div class="one-third column">
            <List name="To Do" cards={this.state.doing} />
          </div>
          <div class="one-third column">
            <List name="To Do" cards={this.state.done} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

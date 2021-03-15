import "./App.css";
import React, { Component } from "react";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Ursus",
        completed: false,
      },
      {
        id: 2,
        title: "Maple Tours",
        completed: false,
      },
      {
        id: 3,
        title: "Monster Park",
        completed: false,
      },
    ],
  };
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id == id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos
            todos={this.state.todos}
            delTodo={this.delTodo}
            markComplete={this.markComplete}/>
        </div>
      </div>
    );
  }
}

export default App;

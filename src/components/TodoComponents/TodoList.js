import React, { Component } from "react";
import Todo from "./Todo";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import TodoForm from "./TodoForm";
import Search from "./Search";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { filtered: [], searchTerm: "" };
  }

  handleSearch = task => {
    this.setState({
      searchTerm: task,
      filtered: this.props.todos.filter(item =>
        item.task.toLowerCase().includes(task.toLowerCase())
      )
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        ...this.state,
        filtered: this.props.todos.filter(item =>
          item.task.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        )
      });
    }
  }

  renderTodos() {
    return (
      <>
        {this.state.searchTerm === ""
          ? this.props.todos.map((todo, index) => (
              <Todo
                handleToggle={this.props.handleToggle}
                handleDelete={this.props.handleDelete}
                handleEdit={this.props.handleEdit}
                handleTaskChange={this.props.handleTaskChange}
                key={todo.id}
                index={index}
                todo={todo}
              />
            ))
          : this.state.filtered.map((todo, index) => (
              <Todo
                handleToggle={this.props.handleToggle}
                handleDelete={this.props.handleDelete}
                handleEdit={this.props.handleEdit}
                handleTaskChange={this.props.handleTaskChange}
                key={todo.id}
                index={index}
                todo={todo}
              />
            ))}
      </>
    );
  }

  render() {
    return (
      <div>
        <TodoForm
          handleClear={this.props.handleClear}
          handleSubmit={this.props.handleSubmit}
        />
        <br />
        <Divider variant="middle" />
        <Search handleSearch={this.handleSearch} />
        <List>{this.renderTodos()}</List>
      </div>
    );
  }
}

export default TodoList;
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTodo } from "../../actions/todoActions";
import { getTodos } from "../../actions/todoActions";
import { deleteTodo } from "../../actions/todoActions";

class Todos extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      window.location.href = "/";
    }
    this.props.getTodos();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const todoData = {
      title: this.state.title
    };
    if (todoData.title != "") this.props.addTodo(todoData);

    this.setState({ title: "" });
  }

  onDelete(id) {
    this.props.deleteTodo(id);
  }

  render() {
    const { user } = this.props.auth;
    const { todos } = this.props.todos;
    let todoList;
    if (todos === null) {
      todoList = <p className="lead text-center">У вас нет задач</p>;
    } else {
      todoList = todos.todos.length ? (
        todos.todos.map(todo => {
          return (
            <div className="list-group-item" key={todo._id}>
              <span>{todo.title}</span>
              <span
                className="todo-delete"
                onClick={this.onDelete.bind(this, todo._id)}
              >
                <i className="far fa-trash-alt" />
              </span>
            </div>
          );
        })
      ) : (
        <p className="lead text-center">У вас нет задач</p>
      );
    }

    return (
      <div className="todos">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <p className="lead text-center">Введите название задачи</p>
              <form onSubmit={this.onSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Задача"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      id="button-addon2"
                      onClick={this.onSubmit}
                    >
                      Записать
                    </button>
                  </div>
                </div>
              </form>
              <div>{todoList}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Todos.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  getTodos: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  todos: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  todos: state.todos,
  todo: state.todo
});

export default connect(
  mapStateToProps,
  { getTodos, addTodo, deleteTodo }
)(Todos);

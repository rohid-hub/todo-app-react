import React, { Component } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import ToggleList from "./components/ToggleList";

export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            ShowBy: "active",
        };
    }

    componentDidMount() {
        if (localStorage.getItem("todos")) {
            const todos = JSON.parse(localStorage.getItem("todos"));
            this.setState({ todos });
        }
    }

    addTodo = (task) => {
        this.setState(
            (prevState) => {
                return {
                    todos: [
                        ...prevState.todos,
                        {
                            id:
                                prevState.todos.length > 0
                                    ? prevState.todos[
                                          prevState.todos.length - 1
                                      ].id + 1
                                    : 1,
                            task,
                            completed: false,
                        },
                    ],
                };
            },
            () => {
                localStorage.setItem("todos", JSON.stringify(this.state.todos));
            }
        );
    };

    toggleTodo = (id) => {
        this.setState(
            (prevState) => {
                return {
                    todos: prevState.todos.map((todo) =>
                        todo.id === id
                            ? {
                                  ...todo,
                                  completed: !todo.completed,
                              }
                            : todo
                    ),
                };
            },
            () => {
                localStorage.setItem("todos", JSON.stringify(this.state.todos));
            }
        );
    };

    deleteTodo = (id) => {
        this.setState(
            (prevState) => {
                return {
                    todos: prevState.todos.filter(
                        (todo) => todo.id !== id && todo
                    ),
                };
            },
            () => {
                localStorage.setItem("todos", JSON.stringify(this.state.todos));
            }
        );
    };

    changeShowBy = (value) => {
        this.setState({ ShowBy: value });
    };

    render() {
        const { todos, ShowBy } = this.state;
        return (
            <div className="wrapper">
                <h2 className="Logo">Todo List</h2>
                <ToggleList ShowBy={ShowBy} changeShowBy={this.changeShowBy} />
                <TodoList
                    data={todos}
                    ShowBy={ShowBy}
                    toggleTodo={this.toggleTodo}
                    deleteTodo={this.deleteTodo}
                />
                <AddTodo addTodo={this.addTodo} />
            </div>
        );
    }
}

export default App;

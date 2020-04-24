import React from "react";
import Todo from "./Todo";

const TodoList = ({ data, toggleTodo, deleteTodo, ShowBy }) => {
    return (
        <ul className="TodoList">
            {ShowBy === "active"
                ? data.map(
                      (todo, i) =>
                          !todo.completed && (
                              <Todo
                                  toggleTodo={toggleTodo}
                                  deleteTodo={deleteTodo}
                                  data={todo}
                                  key={i}
                              />
                          )
                  )
                : ShowBy === "completed"
                ? data.map(
                      (todo, i) =>
                          todo.completed && (
                              <Todo
                                  toggleTodo={toggleTodo}
                                  deleteTodo={deleteTodo}
                                  data={todo}
                                  key={i}
                              />
                          )
                  )
                : data.map((todo, i) => (
                      <Todo
                          toggleTodo={toggleTodo}
                          deleteTodo={deleteTodo}
                          data={todo}
                          key={i}
                      />
                  ))}
        </ul>
    );
};

export default TodoList;

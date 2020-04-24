import React from "react";

const Todo = ({ data: { task, id, completed }, toggleTodo, deleteTodo }) => {
    return (
        <div draggable="true" className="TodoItem">
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={(e) => toggleTodo(id)}
                />
                <p
                    style={{
                        textDecoration: completed ? "line-through" : "none",
                        color: completed ? "#999" : "#333",
                    }}
                >
                    {task}
                </p>
            </label>
            {completed && (
                <button onClick={(e) => deleteTodo(id)}>Delete</button>
            )}
        </div>
    );
};

export default Todo;

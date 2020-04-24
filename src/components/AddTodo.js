import React, { Component } from "react";

export class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: "",
        };
        this.onChangeHandle = this.onChangeHandle.bind(this);
    }

    onChangeHandle = (value) => {
        this.setState({ inputValue: value });
    };
    render() {
        const { inputValue } = this.state;
        const { addTodo } = this.props;
        return (
            <form
                className="AddTodoForm"
                onSubmit={(e) => {
                    e.preventDefault();
                    if (inputValue !== "") {
                        addTodo(inputValue);
                        this.setState({ inputValue: "" });
                    }
                }}
            >
                <input
                    placeholder="Add Todo"
                    type="text"
                    value={inputValue}
                    onChange={(e) => this.onChangeHandle(e.target.value)}
                />
                <button>Add</button>
            </form>
        );
    }
}

export default AddTodo;

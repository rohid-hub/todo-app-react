import React from "react";

const ToggleList = ({ changeShowBy, ShowBy }) => {
    return (
        <div className="ToggleList">
            <button
                style={{
                    color: ShowBy === "active" ? "#999" : "#333",
                    cursor: ShowBy !== "active" && "pointer",
                }}
                onClick={() => changeShowBy("active")}
            >
                Active
            </button>
            <button
                style={{
                    color: ShowBy === "completed" ? "#999" : "#333",
                    cursor: ShowBy !== "completed" && "pointer",
                }}
                onClick={() => changeShowBy("completed")}
            >
                Completed
            </button>
            <button
                style={{
                    color: ShowBy === "all" ? "#999" : "#333",
                    cursor: ShowBy !== "all" && "pointer",
                }}
                onClick={() => changeShowBy("all")}
            >
                All
            </button>
        </div>
    );
};

export default ToggleList;

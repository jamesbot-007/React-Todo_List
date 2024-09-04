import React from "react";

export const TodoItem = ({ todo, onDelete }) => { // destructure todo, onDelete
    return (
        <div className="border p-3 mb-2 border-opacity-100">
            <h4>{todo.title}</h4>
            <p className="mb-2">{todo.desc}</p>
            <button type="button" className="btn btn-sm btn-danger mb-3" onClick={onDelete}>
                Delete
            </button>
        </div>
    );
};

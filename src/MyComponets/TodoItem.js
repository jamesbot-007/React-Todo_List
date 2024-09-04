import React from "react";

export const TodoItem = ({ todo }) => {
    // Take "todo" using destructuring object (Here we can use the "props" but we use {todo} with destucturing for better understanding )
    return (
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button type="button" class="btn btn-sm btn-danger">
                Button
            </button>
        </div>
    );
};

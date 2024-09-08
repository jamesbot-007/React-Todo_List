import React from "react";

export const TodoItem = ({ todo, onDelete }) => { 
    return (
        <>
        <div className="border border-light rounded p-2 ps-3 mb-3 border-opacity-100 ">
            <h4>{todo.title}</h4>
            <p className="mb-2">{todo.desc}</p>
            <button type="button" className="btn btn-sm btn-danger mb-2" onClick= { () => {onDelete(todo)} }>Delete</button>
        </div>
        </>
    );
};

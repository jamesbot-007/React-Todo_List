import React from "react";
import { TodoItem } from "./TodoItem";



export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-center my-3">Todo's List</h3>
            <TodoItem todo={props.todo[0]} />
        </div>
    );
}

import React from "react";
import { TodoItem } from "./TodoItem";
import "./style.css";

export const Todos = (props) => {
    

    return (
        <div className="container c3">
            <h3 className="my-3">Todo's List</h3>
            {props.todo.length === 0 ? (<span>no todos to <b>display</b> </span>) : props.todo.map((todo) => {
                return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />)
            })}
        </div>
    );
};

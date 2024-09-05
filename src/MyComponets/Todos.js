import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    console.log("Todo Array :", props.todo);

    return (
        <div className="container ">
            <h3 className="my-3">Todo's List</h3>


            {/* {props.todo.length===0?"no todos to <b>display</b>" : props.todo.map((todo) => {
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            })} */}

            {/* Here the html code will not execute */}

            {/* To execute html code  */}
            {props.todo.length === 0 ? (<span>no todos to <b>display</b> </span>) : props.todo.map((todo) => {
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            })}
        </div>
    );
};

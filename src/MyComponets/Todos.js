import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-center my-3">Todo's List</h3>
            {props.todo.map((todo) => {
                // return <TodoItem todo={todo} />   // return only one line

                // console.log(todo);
                // to return multiple line you can use <>...</>

                // return <>
                //     {/* <h3>this</h3> */}
                //     <TodoItem todo={todo} onDelete={props.onDelete} />

                // </>;
               

                //  To avoid warning : each child should have unique prop 
                // return <div key={todo.sno}> 
                //         <TodoItem todo={todo} onDelete={props.onDelete} />
                //     </div>


                // OR
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />

            })}
        </div>
    );
};

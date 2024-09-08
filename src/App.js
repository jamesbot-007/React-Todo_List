import "./App.css";
import Header from "./MyComponets/Header";
import { Todos } from "./MyComponets/Todos";
import { Footer } from "./MyComponets/Footer";
import React, { useState, useEffect } from "react";
import { AddTodo } from "./MyComponets/AddTodo";

function App() {

    let initTodo;
    if(localStorage.getItem("todo") === null){
        initTodo = [];
    }
    else{
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }




    const addTodo = (title, desc) => {
        console.log("Add Todo", title, desc);

        let sno;
        if (todos.length === 0){
            sno = 0;
        }
        else {
            sno = todos[todos.length - 1].sno + 1;
        }
        console.log("sno = ", sno);

        const myTodo = {
            sno: sno,
            title: title,
            desc: desc,
        };

        setTodos([...todos, myTodo]);
        console.log(myTodo);


        
        
    };

    const onDelete = (todo) => {
        console.log("I am onDelete", todo);

        setTodos(
            todos.filter((e) => {
                return e !== todo;
            })
        );
        localStorage.setItem("todos",JSON.stringify(todos));
    };

    const [todos, setTodos] = useState(initTodo);

    useEffect(() => {
        localStorage.setItem("todos",JSON.stringify(todos));
    }, [todos]);
    // Whenever "todos" change the function inside useEffect() will call
    // new updated "todos" will stored in localStorage

    return (
        <>
            <Header title="My Todos List" searchBar={false} />
            <AddTodo addTodo={addTodo} />
            <Todos todo={todos} onDelete={onDelete} />

            <Footer />
        </>
    );
}

export default App;

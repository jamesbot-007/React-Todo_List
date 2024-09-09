import "./App.css";
import Header from "./MyComponets/Header";
import { Todos } from "./MyComponets/Todos";
import { Footer } from "./MyComponets/Footer";
import React, { useState, useEffect } from "react";
import { AddTodo } from "./MyComponets/AddTodo";
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import {About} from "./MyComponets/About";


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



    // here the change is made
    const [todos, setTodos] = useState( localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
    // if there is any todos prensent in localStorage then initialize "todos" object with it
    // else if  Todos list is empty then initialize "todos" object with empty list   ( i.e. []  )

    // U can check this thing by Typing `localStorage.todos` in browser dev-tools cosole. 


    useEffect(() => {
        localStorage.setItem("todos",JSON.stringify(todos));
    }, [todos]);
    // Whenever "todos" change the function inside useEffect() will call
    // new updated "todos" will stored in localStorage

    return (
        <Router>
            <Header title="MyTodosList" searchBar={false} />

            <Routes>
                <Route path="/" element={
                    <>
                        <AddTodo addTodo={addTodo} />
                        <Todos todo={todos} onDelete={onDelete} />
                    </>
                } />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<h1 className="text-center d-flex align-items-center justify-content-center">404 Page Not Found</h1>} />
            </Routes>


            <Footer />
        </Router>
    );
}

export default App;

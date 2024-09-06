// import logo from "./logo.svg";// comment it to resolve warning : It is not in use but still included.
import "./App.css";
import Header from "./MyComponets/Header";
import { Todos } from "./MyComponets/Todos";
import { Footer } from "./MyComponets/Footer";
import React, { useState } from 'react';
import { AddTodo } from "./MyComponets/AddTodo"

function App() {

    const addTodo = (title, desc) => {
        console.log("Add Todo", title, desc);
        let sno = todos[todos.length-1].sno + 1;
        console.log("sno = ", sno);
        // Last todo's serial no. 
        // index start from 0. Ex : length =3 then last todo have index=2 (because indexes are 0,1,2 ; total 3) 
        // that's why -1 from todos.length so we can get the last todo


        const myTodo = {
            sno : sno,
            title : title,
            desc : desc,
        }
        console.log(myTodo);
    }

    const onDelete = (todo) => {
        console.log("I am onDelete", todo);

        // let index = todos.indexOf(todo);
        // todos.splice(index, 1);

        // how can i access "todos" inside the onDelete method?
        setTodos(todos.filter((e) => {
            return e!==todo;
        } ))

    }

    const [todos, setTodos] = useState([
        // useState is Function and this way we can use useState hook🪝
        {
            sno: 1,
            title: "Go to the Market",
            desc: "You need to go to the market to get this job done1. This is your first task",
        },
        {
            sno: 2,
            title: "Go to the Mall",
            desc: "You need to go to the market to get this job done2. This is your 2nd task",
        },
        {
            sno: 3,
            title: "Go to the Parking",
            desc: "You need to go to the market to get this job done3. This is your 3rd task",
        },
    ]);

    return (
        // Whenever you return something it shold be wrapped inside something
        // if there is nothing to wrap then put empty tags like,
        // <>
        // Code
        // </>

        <>
            {/* Comment in JSX */}

            <Header />
            {/* <Header title="Todo's List"/> */}
            {/* <Header title={56}/> */}
            {/* <Header title="Todo's List" tab1="Home" tab2="About"/> */}
            {/* <Header title="Todo's List" search={true} /> */}
            {/* <Header title="Todo's List" search={true} /> */}

            <AddTodo addTodo={addTodo}/>

            {/* <Todos todo={todos}/> */}
            <Todos todo={todos} onDelete={onDelete}/>


            <Footer />
        </>
    );
}

export default App;

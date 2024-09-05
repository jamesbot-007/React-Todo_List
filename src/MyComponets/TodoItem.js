import React from "react";

export const TodoItem = ({ todo, onDelete }) => { // destructure todo, onDelete
    return (
        <div className="border border-dark rounded p-3 ps-5 mb-3 border-opacity-100 ">
            <h4>{todo.title}</h4>
            <p className="mb-2">{todo.desc}</p>
            {/* <button type="button" className="btn btn-sm btn-danger mb-3" onClick={onDelete}>Delete</button> */}

            {/* here we write onDelete={OnDelete} means we're passing onDelete function */}
            {/* if it is like onDelete={OnDelete()} then you click on only one delete button and it will call OnDelete() for all buttons */}
            {/* solution : we pass arrow function. Arrow function will call only thatt onDelete() on which we clicked because we pass todo as argument to it (These type of thing you will learn as per time goes in React ) */}

            <button type="button" className="btn btn-sm btn-danger mb-3" onClick= { () => {onDelete(todo)} }>Delete</button>
            
            {/* It can be a Normal function or can be an Arrow function */}
            {/* <button type="button" className="btn btn-sm btn-danger mb-3" onClick= { function () {onDelete(todo)} }>Delete</button> */} 

            {/* This way we can call delete for a specific note(i.e. todo) */}
            {/* When we write a function inside an arDrow function that time we're passing a function */}
            {/* But via onDelete() we're calling the function. and by this way  { () => {onDelete} } we're passing the function and by this way  { () => {onDelete(todo)} } we're passsing the function with argument in callback, here we're not passing the function remember here we're pass*/}

            {/* Make sure you have passed todo as parameter in App.js */}


            {/* WE HAVE JUST CREATED A FUNCTION AND PASS onDelete() method to it. passing a function inside another function (not calling)  */}
        </div>
    );
};

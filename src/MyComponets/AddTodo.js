import React, {useState} from 'react'

export const AddTodo = (props) => {
    
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    
    const submit = (e) =>{
        e.preventDefault();
        if(!title || !desc){
            // If there is no title or no desct or not both then todo will not added. and will shown 
            alert("Title or Description can not be blank");
        }
        else{
            props.addTodo(title,desc)
            setTitle("");
            setDesc("");
        }
    }
   
    return (
        <div className="container c2 my-5 ">
            <h3 className='mb-3'>Add a Todo</h3>
            <form onSubmit={submit} autoComplete='off'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo title</label>
                    <input type="text" value={title} className="form-control" onChange={(e)=>{setTitle(e.target.value)}} id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Discription</label>
                    <input type="text" value={desc} className="form-control" onChange={(e)=>{setDesc(e.target.value)}} id="desc" />
                </div>
              
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}

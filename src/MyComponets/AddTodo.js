import React, {useState} from 'react'

export const AddTodo = (props) => {
    
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    
    const submit = () =>{

    }
   
    return (
        <div className="container my-5 ">
            <h3 className='mb-3'>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label for="title" className="form-label">Todo title</label>
                    <input type="text" value={title} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="desc" className="form-label">Todo Discription</label>
                    <input type="text" value={desc} className="form-control" id="desc" />
                </div>
              
                <button type="submit" className="btn  btn-success"> &nbsp;Add&nbsp; </button>
            </form>
        </div>
    )
}

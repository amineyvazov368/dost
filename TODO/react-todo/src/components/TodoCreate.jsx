import React, { useState } from 'react';
import './TodoCreate.css'

function TodoCreate({onCreateTodo}){
const [newTodo, setNewTodo]=useState('');
const clearInp=()=>{
    setNewTodo('');
}

    const createTodo =()=>{
        if(!newTodo) return;
        const request={
            id:Math.floor(Math.random()*99999999),
            content: newTodo
        }
        onCreateTodo(request)
        clearInp();
    }
    return(
       <>
        <div className='create'>
            <input
             value={newTodo} 
             onChange={(e)=>setNewTodo(e.target.value)} 
             type="text" placeholder='todo daxil et' /> <br />
            <button onClick={createTodo}>Todo yarat</button>
        </div>
       </>
    )
}
export default TodoCreate
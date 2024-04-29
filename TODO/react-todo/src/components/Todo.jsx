import React from 'react';
import './Todo.css'
function Todo({todo, onRemoveTodo}){
    const {id, content}=todo
    const removeTodo=()=>{
        onRemoveTodo(id);
    }
    return(
       <>
      
        <div className='list'>
            <p>{content}</p>
            <button onClick={removeTodo} className='delete'>del</button>
        </div>
        
            
        
      
       </>
    )
}
export default Todo
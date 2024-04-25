import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'



function App() {
  const [todos, setTodos] = useState([]);
  const[searchTodo, setSearchTodo]= useState([]);
   const createTodo =(newTodo)=>{
    setTodos([...todos, newTodo]);
   }
 const removeTodo=(todoId)=>{
 if(window.confirm("are you sure to delete")){ setTodos([...todos.filter((todo)=> todo.id!==todoId)])}
 
  
 }


console.log(todos)
  return (
    <>
      <TodoCreate onCreateTodo= {createTodo}/>
      <input type="text" placeholder='search' onKeyUp={(e)=>{
        setTodos([...todos.filter((x)=>x.content.toLowerCase().trim().includes(e.target.value.trim().toLowerCase())),
        ]);
      }}/>
      <TodoList todos={todos} onRemoveTodo={removeTodo}/>
    
    </>
  )
}

export default App

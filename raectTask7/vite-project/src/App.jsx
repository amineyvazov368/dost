import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTable from './MyTable/index'
import axios from 'axios'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MyTable/>
    </>
  )
}

export default App

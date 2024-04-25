import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './conpanent/Header'
import Shows from './conpanent/Shows'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Shows/>
    </>
  )
}

export default App

import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Picture from './components/Picture'
import Cards from './components/Cards'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Picture/>
    <Cards/>
    </>
  )
}

export default App

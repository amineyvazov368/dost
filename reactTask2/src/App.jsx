import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Add from './Companents/ADD/Add'
import Search from './Companents/SEARCH/Search'
import Cards from './CARDS/Cards'
import products from './data/data'


function App() {
 
  const [myData, setData] = useState(products)

  return (
    <>
     <Add/>
     <Search/>
     <Cards datalar={myData} setData={setData}/>
    </>
  )
}

export default App

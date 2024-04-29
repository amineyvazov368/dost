import { useEffect, useState } from 'react'
import axios from "axios"
import Add from './components/Add';
import MyTable from './components/MyTable';
function App() {
  const [data, setData] = useState([])

  useEffect(()=>{
    AllgetData()
  },[]);



  const AllgetData=async()=>{
    let resoult= await axios.get('https://northwind.vercel.app/api/products')
    console.log(resoult.data)
      setData(resoult.data)
    }
    
  return (
    <>
      <Add/> 
      <MyTable elements={data}/>
    </>
  )
}



  

export default App

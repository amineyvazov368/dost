import React from 'react'
import './add.css'

function Add({oncreateData}) {
  const [newData, setNewData]=useState('');
const clearInp=()=>{
    setNewData('');
}

const createData =()=>{
  if(!newData) return;
  const request={
      id:Math.floor(Math.random()*99999999),
      content: newData
  }
  oncreateData(request)
  clearInp();
}

  return (
    <div>
       <form className='form'> 
        <div><label>Product Name</label> <br />
        <input  value={newData} 
             onChange={(e)=>setNewData(e.target.value)} type="text" placeholder='Product Name'/>
        </div>
        <div>
        <label>Product Price</label> <br />
        <input value={newData} 
             onChange={(e)=>setNewData(e.target.value)} type="number" placeholder='Product Price'/>
        </div> <br/>
        <button onClick={createData}>Submit form</button>
        </form>
        
    </div>
  )
}

export default Add
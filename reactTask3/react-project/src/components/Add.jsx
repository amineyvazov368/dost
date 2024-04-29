import React from 'react'
import './add.css'

function Add() {
  return (
    <div>
       <form className='form'> 
        <div><label>Product Name</label> <br />
        <input type="text" placeholder='Product Name'/>
        </div>
        <div>
        <label>Product Price</label> <br />
        <input type="number" placeholder='Product Price'/>
        </div> <br/>
        <button>Submit form</button>
        </form>
        
    </div>
  )
}

export default Add
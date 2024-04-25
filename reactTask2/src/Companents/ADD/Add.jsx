import React from 'react'
import './Add.css'
 function Add() {
  return (
    <>
      
    <div className='add'>
      <div>
        <label>Course Name</label> <br />
      <input type="text" />
      </div>
      <div>
        <label>Course Price</label> <br />
      <input type="number" />
      </div>
      <div>
        <label>Course Image</label> <br />
      <input type="url" />
      </div>
    </div>
    <button className='add-btn' > Course</button>
    </>
        
  )
}

export default Add
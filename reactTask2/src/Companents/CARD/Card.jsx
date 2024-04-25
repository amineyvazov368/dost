import React from 'react'
import './Card.css'

const Card=({datalar, data, setData}) => {
  return (
    <>
   <div className='card-container'>
   <div className='card'>
      <div className='card-img'>
      <img src={data.image} alt="" /></div>
      <div className='card-text'>
          <h4>{data.name}</h4>
          <h5>{data.price}</h5>
          <button onClick={()=>{
            let filtered = datalar.filter(el => el.id != data.id)
            setData(filtered)
          }}>Delete</button>
      </div>
   </div>
</div>
    
  
    
    
    </>
  )
};

export default Card
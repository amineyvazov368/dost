import React from 'react'
import Card from '../Companents/CARD/Card'

const Cards=({datalar,setData})=> {
  return (
    <div>
        {
            datalar.map((data)=>(
                <Card key={data.id} datalar={datalar} data={data}  setData={setData}/>
            ))
        }
    </div>
  )
}

export default Cards
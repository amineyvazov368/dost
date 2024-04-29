import React from 'react'
import Table from 'react-bootstrap/Table';
import TableItem from './TableItem';

const MyTable = ({elements}) => {
  // console.log(elements)
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>Product Name</th>
        <th>Price</th>
        <th>Favorite</th>
        <th>Delete</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
         {
          elements&&elements.map((element)=>(
            <TableItem element={element}/>
          ))
         }
    </tbody>
  </Table>
  )
}

export default MyTable
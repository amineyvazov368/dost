import React from 'react'

const TableItem = (element) => {
  return (
    <tr>
  
    <td>{element.element.name}</td>
    <td>{element.element.unitPrice}</td>
    <td><button>Favorite</button></td>
    <td><button>Delete</button></td>
    <td><button>Update</button></td>
  </tr>
  )
}

export default TableItem
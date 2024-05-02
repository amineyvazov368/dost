import React from 'react'
import Style from './index.module.css'
import { Button, Table } from 'antd';
import { useEffect, useState } from "react";
import controller from '../API/index';
import { endpoints } from '../API/Base';
import Swal from "sweetalert2";






const index=()=> {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    controller.getAll(endpoints.order).then((res) => {
      setOrder([...res.data]);
    });
  }, []);



  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
  
    },
    {
        title: 'Costumer id',
        dataIndex: 'customerId',
       
      },
      {
        title: 'Order Date',
        dataIndex: 'orderDate',
        sorter: (a, b) => a.age - b.age,
        
      },
    {
      title: 'Ship Via',
      dataIndex: 'shipVia',
      sorter: (a, b) => a.age - b.age,
    },
   
  
      {
        title: 'Delete',
        render: (record) => (
          <Button type="primary" danger ghost  onClick={() => {
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then((result) => {
              if (result.isConfirmed) {
                console.log(record.id);
                controller.delete(endpoints.order, record.id);
                setOrder((order) => {
                  return order.filter((x) => x.id != record.id);
                });
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }
            });
          }}>
            Delete
         </Button>
         ),
       
      },
      {
        title: 'Update',
        render: () => (
          <Button type="primary" ghost>
          UpDate
        </Button>
       
      )},
   
  ];
  // 
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
   <>
   <Table columns={columns} dataSource={order} onChange={onChange} />;
   
   
   </>
  )
}

export default index
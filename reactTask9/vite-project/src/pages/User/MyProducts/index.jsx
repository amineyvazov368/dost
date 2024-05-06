import React from 'react'
import { endpoints } from '../../../services/constant'
import { useEffect, useState } from "react";
import controller from "../../../services";
import ProductList from '../../../conponents/User/ProductList'

const index = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  console.log(error);
  useEffect(() => {
    setLoading(true);
    controller
      .getAll(endpoints.products)
      .then((res) => {
        
        setProducts(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
    <h1>Products</h1>
    
    
    
    </>
  )
}

export default index
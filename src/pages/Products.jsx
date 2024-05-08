import React from 'react'
import axios from 'axios';
import { Helmet } from 'react-helmet-async'
import { useEffect} from 'react';




const Products = () => {
   useEffect(() => {
     axios.get(`https://fakestoreapi.com/products`).then((res) => {
          console.log(res)
     })
   })
  return (
    <div>
    <Helmet>
          <title>Products</title>
          
      </Helmet>
     
    </div>
  )
}

export default Products

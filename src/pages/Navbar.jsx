import React from 'react'
import { Link } from 'react-router-dom'
import about from './About';
import Products from './Products';
const navbar = () => {
  return (
    <div>
      <ul>
          <li >
               <Link to={"/"}>Home</Link>
          </li>
          <li >
               <Link to={"/about"}>about</Link>
          </li>
          <li >
               <Link to={"/contact"}>Contact</Link>
          </li>
          <li >
               <Link to={"/Products"}>Products</Link>
          </li>
      </ul>
    </div>
  )
}

export default navbar

import { useState } from 'react'
import {Route,Routes} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './pages/Navbar'
import Products from './pages/Products';

function App() {
  

  return (
   <>
 <Navbar/>
<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/contact' element={<Contact/>}></Route>
<Route path='/Products' element={<Products/>}></Route>

</Routes>
   </>
  )
}

export default App

import React from 'react'
import {Outlet} from "react-router-dom"
import Navbar from '../../conponents/User/Navbar'
import Footer from '../../conponents/User/Footer'



const UserRoot = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default UserRoot
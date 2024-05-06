import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../../conponents/Admin/Navbar"
import Footer from "../../conponents/Admin/Footer"

const AdminRoot = () => {
  return (
<>
    <Navbar/>
    <Outlet/>
    <Footer/>

</>
  )
}

export default AdminRoot
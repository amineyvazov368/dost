import React from 'react'
import Style from './index.module.css'
import { FaBars } from "react-icons/fa";
function index() {
  return (
   <>
    <div className={Style.container}>
       <div styleName={Style.row}>
    <div className={Style.header}>
    <div className={Style.logo}>
        <img src="	https://capp.nicepage.com/images/default-logo.png" alt="" />
    </div>

    <div className={Style.icon}>
    <FaBars />
    </div>
    </div>
    </div>
        
    </div>
   </>
  )
}

export default index
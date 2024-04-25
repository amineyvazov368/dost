import React from 'react'
import './Header.css' 

const Header = () => {
  return (
    <div className='header'>
        <div className='logo'><h2>Start Bootstrap</h2>
        <ul>
        <li>Home</li>
        <li>About</li>
        <li>Shop</li>
        </ul>
        </div>
        <button>cart</button>
    </div>
  )
}

export default Header
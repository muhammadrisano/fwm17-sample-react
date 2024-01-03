import React from 'react'
import {NavLink} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className='nav'>
      <ul className='nav-items'>
        <li>
          <NavLink className='item' to='/'>Home</NavLink>

        </li>
        <li>
          <NavLink className='item' to="/main/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink className='item' to="/main/products/123">Products</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
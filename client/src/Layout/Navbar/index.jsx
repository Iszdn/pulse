import React from 'react'
import "./index.scss"
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import { FaPhone } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav id='navbar'>
<div className="nav">
  <div className="loogo">
    <h2>Pulse <span>.</span></h2>
  </div>
  <div className="navigations">
    <ul>
      <li>
        <NavLink to="/" >Home</NavLink>
      </li>
      <li>
        <NavLink  to="/about" >About Us</NavLink>
      </li>
      <li>
        <NavLink  to="/add" >Admin</NavLink>
      </li>
      <li>
        <NavLink  to="/wish"><span><GoHeart /></span></NavLink>
      </li>
      <li>
        <NavLink  to="/basket"><span><AiOutlineShoppingCart /></span></NavLink>
      </li>
    </ul>
  </div>
  <div className="reserv">
    <span>Reservations</span>
    <Link><FaPhone /></Link>
    <Link> 652-345 3222 11</Link>
  </div>
</div>
    </nav>
  )
}

export default Navbar
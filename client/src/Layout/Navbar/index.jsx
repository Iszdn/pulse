import React, { useState } from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(!open);
  }
  return (
    <nav id="navbar">
      <div className="nav">
        <div className="loogo">
          <h2>
            Pulse <span>.</span>
          </h2>
        </div>
        <div className="navigations">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/add">Admin</NavLink>
            </li>
            <li>
              <NavLink to="/wish">
                <span>
                  <GoHeart />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/basket">
                <span>
                  <AiOutlineShoppingCart />
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div onClick={() => handleOpen()} className="bar">
          {open ? <AiOutlineClose /> : <FaBars />}
        </div>
        <div className="reserv">
          <span>Reservations</span>
          <Link>
            <FaPhone />
          </Link>
          <Link> 652-345 3222 11</Link>
        </div>
      </div>
      <div className={`media-bar ${open ? "nav-active" : ""}`}>
        <div className="navigations">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/add">Admin</NavLink>
            </li>
            <li>
              <NavLink to="/wish">Wishlist</NavLink>
            </li>
            <li>
              <NavLink to="/basket">Cart</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

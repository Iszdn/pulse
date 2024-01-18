import React, { useContext } from 'react'
import "./index.scss"
import { GoHeart } from "react-icons/go";
import { WishlistContext } from '../../context/WishlistContext';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoHeartSharp } from "react-icons/io5";
import { BasketContext } from '../../context/BasketContext';
import { Link } from 'react-router-dom';
const Card = (product) => {
  const {wish,addWish}=useContext(WishlistContext)
  const {addBasket}=useContext(BasketContext)
  return (
    <div className='card-menu col-lg-6 col-md-12 col-12'>
<h3><Link to={product._id}>{product.title}
</Link></h3>
<p>{product.desc}............................................................... <span>${product.price}.00</span> </p>
    <span onClick={()=>addWish(product)}>

      {
wish.some(x=>x._id===product._id) ? <IoHeartSharp /> : <GoHeart />
      }
    </span>
    <span onClick={()=>addBasket(product)}><AiOutlineShoppingCart /></span>
    </div>
  )
}

export default Card
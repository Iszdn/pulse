import React, { useContext } from 'react'
import "./index.scss"
import { WishlistContext } from '../../context/WishlistContext'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BasketContext } from '../../context/BasketContext'
import { IoHeartDislikeOutline } from "react-icons/io5";
const Wishlist = () => {
  const {wish,deleteWish}=useContext(WishlistContext)
  const {addBasket}=useContext(BasketContext)
  return (
    <div>
      {
       wish.length===0 ? <h1>Wishlist is empty</h1>  : <div className="container">
        <div className="row">
          {
            wish && wish.map(product=>
               <div key={product._id} className='card-menu col-lg-6 col-md-12 col-12'>
<h3>{product.title}</h3>
<p>{product.desc}............................................................... <span>${product.price}.00</span> </p>
    <span onClick={()=>deleteWish(product)}><IoHeartDislikeOutline /></span>
    <span onClick={()=>addBasket(product)}><AiOutlineShoppingCart /></span>
    </div>
              )
          }
       
        </div>
       </div>
      }
    </div>
  )
}

export default Wishlist
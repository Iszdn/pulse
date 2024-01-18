import React, { useContext } from 'react'
import "./index.scss"
import { TbShoppingCartOff } from "react-icons/tb";
import { IoHeartSharp } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { WishlistContext } from '../../context/WishlistContext';
import { BasketContext } from '../../context/BasketContext';
const Basket = () => {
  const {wish,addWish}=useContext(WishlistContext)
  const {deleteBasket,basket,incBasket,decBasket,subtotal}=useContext(BasketContext)
  return (
    <div>
      {
       basket.length===0 ? <h1>Basket is empty</h1>  :
        <div className="container">
        <div className="row">
          {
            basket && basket.map(product=>
               <div key={product._id} className='card-menu col-lg-6 col-md-12 col-12'>
<h3>{product.title}</h3>
<p>{product.desc}............................................................... <span>${product.price}.00</span> </p>
    <span onClick={()=>deleteBasket(product)}><TbShoppingCartOff /></span>
    <span onClick={()=>addWish(product)}>

{
wish.some(x=>x._id===product._id) ? <IoHeartSharp /> : <GoHeart />
}
</span>
<div onClick={()=>incBasket(product)} className="btn">+</div>
<span>{product.count}</span>
<div onClick={()=>decBasket(product)} className="btn">-</div>

    </div>
    
              )
          }
       
        </div>
      
      <span>subtotal:{subtotal}</span>
       </div>
      }
    </div>
  )
}

export default Basket
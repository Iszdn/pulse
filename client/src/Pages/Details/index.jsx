import React, { useEffect, useState } from 'react'
import "./index.scss"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import  { useContext } from 'react'
import "./index.scss"
import { GoHeart } from "react-icons/go";
import { WishlistContext } from '../../context/WishlistContext';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoHeartSharp } from "react-icons/io5";
import { BasketContext } from '../../context/BasketContext';
const Details = () => {
  const {wish,addWish}=useContext(WishlistContext)
  const {addBasket}=useContext(BasketContext)
  const [data, setData] = useState()
  const {id}=useParams()
  async function getId() {
    const res=await axios(`http://localhost:8000/${id}`)
    setData(res.data)
  }
  useEffect(() => {
    getId()
  }, [])
  
  return (
    <div>
{
  data && <div className="container">
    <div className="row">
    <div className='card-menu col-lg-6 col-md-12 col-12'>
<h3>{data.title}</h3>
<p>{data.desc}............................................................... <span>${data.price}.00</span> </p>
    <span onClick={()=>addWish(data)}>

      {
wish.some(x=>x._id===data._id) ? <IoHeartSharp /> : <GoHeart />
      }
    </span>
    <span onClick={()=>addBasket(data)}><AiOutlineShoppingCart /></span>
    </div>
    </div>
  </div>
}
    </div>
  )
}

export default Details
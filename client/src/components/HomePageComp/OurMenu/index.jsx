import React, { useEffect, useState } from 'react'
import "./index.scss"
import { BiDish } from "react-icons/bi";
import Card from '../../Card';
import axios from 'axios'
import { Link } from 'react-router-dom';
const OurMenu = () => {
  const [data, setData] = useState([])
  async function getData() {
    const res=await axios("http://localhost:8000/")
    setData(res.data)
  }
  useEffect(() => {
    getData()
   }, [])
  return (
    <section id='our-menu'>
<div className="header">
  <div className="content">
    <div className="icon">
    <BiDish />
    </div>
    <h3>Our Menu</h3>
  </div>
</div>
<div className="break">
  <span>Breakfast</span>
  <span>Brunch</span>
  <span> Lunch</span>
  <span>Dinner</span>
</div>
<div className="container">
  <div className="row">
    {
      data && data.map(x=>
         <Card key={x._id}
          {...x} />
        )
    }
    <div className="div">
      <div className="butonn">
      <Link>See More</Link>
    </div>
    </div>
    


  </div>
</div>
    </section>
  )
}

export default OurMenu
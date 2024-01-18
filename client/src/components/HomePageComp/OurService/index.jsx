import React from 'react'
import "./index.scss"
import { BiDish } from "react-icons/bi";
import { BsCupHot } from "react-icons/bs";
const OurService = () => {
  return (
    <section id='welcome'>
    <div className="header">
<div className="content">
  <div className="icon">
  <BiDish />
  </div>
  <h3>Our Services</h3>
</div>
</div>
<div className="container">
<div className="row cass">
  <div className="col-lg-4 col-md-6 col-12">
    <div className="content">
<span><BsCupHot /></span>
<h4>Breakfast</h4>
<p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
</div>
  </div>
  <div className="col-lg-4 col-md-6 col-12">
    <div className="content">
<span><BsCupHot /></span>
<h4>Breakfast</h4>
<p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
</div>
  </div>
  <div className="col-lg-4 col-md-6 col-12">
    <div className="content">
<span><BsCupHot /></span>
<h4>Breakfast</h4>
<p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
</div>
  </div>
</div>
</div>


  </section>
  )
}

export default OurService
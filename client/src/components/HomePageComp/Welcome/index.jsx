import React from 'react'
import "./index.scss"
import { TbMeat } from "react-icons/tb";
const Welcome = () => {
  return (
    <section id='welcome'>
      <div className="header">
  <div className="content">
    <div className="icon">
    <TbMeat />
    </div>
    <h3>Welcome</h3>
  </div>
</div>
<div className="container">
  <div className="row cass">
    <div className="col-lg-4 col-md-6 col-12">
      <div className="content">
<h4>2001</h4>
<p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
</div>
    </div>
    <div className="col-lg-4 col-md-6 col-12">
      <div className="content">
<h4>2001</h4>
<p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
</div>
    </div>
    <div className="col-lg-4 col-md-6 col-12">
      <div className="content">
<h4>2001</h4>
<p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
</div>
    </div>
  </div>
</div>
<div className="div">
  <img src="https://preview.colorlib.com/theme/pulse/img/sign.png.webp" alt="" />
</div>

    </section>
  )
}

export default Welcome
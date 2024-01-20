import React from 'react'
import { BiDish } from "react-icons/bi";
import "./index.scss"
import { TbMeat } from "react-icons/tb";
const ContactUs = () => {
  return (
    <section id='contact'>
      <div className="korobka">
        <div className="content">
      <div className="header">
  <div className="content">
    <div className="icon">
    <TbMeat />
    </div>
    <h3>Contact us</h3>
  </div>
</div>    
        </div>
        <form action="">

          <div className="container">
      <div className="row">
<input type="text" className='col-lg-6 col-md-12 col-12'  placeholder='Name' />
<input type="text" className='col-lg-6 col-md-12 col-12' placeholder='E-mail'/>
<textarea className='col-lg-12 col-md-12 col-12' name="" id="" cols="30" rows="10"></textarea>
      </div>
        </div>
        </form>
        

      </div>

    </section>
  )
}

export default ContactUs
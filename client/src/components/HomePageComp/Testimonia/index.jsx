import React from 'react'
import "./index.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { IoIceCreamOutline } from "react-icons/io5";
const Testimonia = () => {
  return (
    <section id='testimonia'>
        <div className="header">
<div className="content">
  <div className="icon">
  <IoIceCreamOutline />
  </div>
  <h3>Testimonials</h3>
</div>
</div>
<Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="content">
            <p>"</p>
            <p>Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. In hac habitasse platea dictumst. Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat. Donec nec nisi in nibh commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce ultricies ante tortor, non vestibulum est feu-giat ut. </p>
            <p><span>Ted Chapman</span>, Client</p>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="content">
            <p>"</p>
            <p>Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. In hac habitasse platea dictumst. Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat. Donec nec nisi in nibh commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce ultricies ante tortor, non vestibulum est feu-giat ut. </p>
            <p><span>Ted Chapman</span>, Client</p>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="content">
            <p>"</p>
            <p>Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. In hac habitasse platea dictumst. Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat. Donec nec nisi in nibh commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce ultricies ante tortor, non vestibulum est feu-giat ut. </p>
            <p><span>Ted Chapman</span>, Client</p>
          </div>
          </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default Testimonia
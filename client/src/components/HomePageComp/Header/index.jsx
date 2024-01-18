import React from 'react'
import "./index.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const Header = () => {
  return (
    <section id='header-sec'>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className="content1 content">
  <h2>Food and more<span>.</span></h2>
<p>By Chef Francis Smith</p>
</div></SwiperSlide>
<SwiperSlide>
<div className="content2 content">
  <h2>Special Dish <span>.</span></h2>
<p>By Chef Francis Smith</p>
</div>
</SwiperSlide>
<SwiperSlide>
  <div className="content3 content">
  <h2>Hygienic Food <span>.</span></h2>
<p>By Chef Francis Smith</p>
</div>
</SwiperSlide>


</Swiper>
    </section>
  )
}

export default Header
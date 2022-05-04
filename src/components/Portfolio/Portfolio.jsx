// import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import img_1 from "../img/img_1.png"
import img_2 from "../img/img_2.png"
import img_3 from "../img/img_3.png"
import img_4 from "../img/img_4.png"
import img_5 from "../img/img_5.png"
import "swiper/css"
import { Pagination } from "swiper";
import "swiper/css/pagination";

function Portfolio() {
  return (
    <div className="portfolio">

        {/* heading */}
        <span>My Work</span>
      


        {/* slider*/}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        modules={[Pagination]}
        // slidesPerView={1}
        pagination={{clickable: true}}
        >

            <SwiperSlide>
                <a href="https://mackenzieneveaux.github.io/weatherapp/" target={"_blank"} rel="noreferrer">
                <img src={img_1} alt="" />
                </a>
            </SwiperSlide>

            <SwiperSlide>
            <a href="https://mackenzieneveaux.github.io/PokeTrivia/" target={"_blank"} rel="noreferrer">
                <img src={img_2} alt="" />
                </a>
            </SwiperSlide>

            <SwiperSlide>
            <a href="https://mackenzieneveaux.github.io/codequiz/" target={"_blank"} rel="noreferrer">
                <img src={img_3} alt="" />
                </a>
            </SwiperSlide>

            <SwiperSlide>
            <a href="https://mackenzieneveaux.github.io/pwgen/" target={"_blank"} rel="noreferrer">
                <img src={img_4} alt="" />
                </a>
            </SwiperSlide>

            <SwiperSlide>
                 
                <a href="https://feed-your-lifestyle.herokuapp.com/" target={"_blank"} rel="noreferrer">
                <img src={img_5} alt="" />
                </a>

            </SwiperSlide>

        </Swiper>
        
    </div>
  )
}

export default Portfolio

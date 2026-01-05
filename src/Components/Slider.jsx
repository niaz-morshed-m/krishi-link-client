import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Hero from "./Hero";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Aos from "aos";

const Slider = () => {
    useEffect(() => {
             Aos.init();
           }, []);
         
           
  return (
    <div className="w-full mt-5" data-aos-duration="5000"
          data-aos="fade-up">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
      >
        <SwiperSlide>
          <Hero></Hero>
        </SwiperSlide>
        <SwiperSlide>
          <Hero2></Hero2>
        </SwiperSlide>
        <SwiperSlide>
          <Hero3></Hero3>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-pagination"></div>
      <style dangerouslySetInnerHTML={{__html: `
        
        .swiper-pagination-bullet {
          background-color: #22c55e !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}} />
    </div>
  );
};

export default Slider;

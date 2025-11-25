import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Hero from "./Hero";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";
import { Autoplay } from "swiper/modules";
import Aos from "aos";

const Slider = () => {
    useEffect(() => {
             Aos.init();
           }, []);
         
           
  return (
    <div className="w-full mt-28" data-aos-duration="5000"
          data-aos="fade-up">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
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
    </div>
  );
};

export default Slider;

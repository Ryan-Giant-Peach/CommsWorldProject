import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Bottomfigure from "./Bottomfigure";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';


function Topfigure({ politicians, onChange }) {
  return (
    <Swiper
    id="top-swiper"
      aria-label="Politicians"
      sliderPerView={1}
      centeredSlides={true}
      onSlideChange={(swiper) => {
        onChange(swiper.activeIndex);
      }}
    >
      {politicians.map((politician, index) => (
        <SwiperSlide key={index}>
          <img
          className="top-slide"
             height='300px'
             width="100%"
            src={`/img/politicians/${politician.name}.png`}
            alt={politician.name}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Topfigure;

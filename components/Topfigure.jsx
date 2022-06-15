import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Bottomfigure from "./Bottomfigure";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';


function Topfigure({ politicians, onChange }) {
  return (
    <Swiper
      aria-label="Politicians"
      sliderPerView={1}
      onSlideChange={(swiper) => {
        onChange(swiper.activeIndex);
      }}
    >
      {politicians.map((politician, index) => (
        <SwiperSlide key={index}>
          <img
            src={`/img/politicians/${politician.name}.png`}
            alt={politician.name}
            height="100%"
            width="100%"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Topfigure;

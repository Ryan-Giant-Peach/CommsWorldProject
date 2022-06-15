import React from 'react'
import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const images = [
  { name: 'charmander', tag: 'mander' },
  { name: 'squirtle', tag: 'tle' },
  { name: 'snorlax', tag: 'lax' },
]

function Bottomfigure({pokemon, onChange}) {

  // hallo!
  return (
    <Swiper aria-label="Pokemon"
    sliderPerView={1}
    onSlideChange={(swiper) => {onChange(swiper.activeIndex)}}
    >
      {pokemon.map((image, index) => (
      <SwiperSlide key={index}>
        <img src={`/img/pokemon/${images[index].name}.png`} alt={image.name} height="100%" width="100%" />
        
      </SwiperSlide>
      ))}

    </Swiper>
      
  )
}

export default Bottomfigure


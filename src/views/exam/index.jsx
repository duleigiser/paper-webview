import React, { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Controller } from 'swiper';
// Import Swiper styles
import 'swiper/swiper.scss';

SwiperCore.use([Controller]);
const Exam = () => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  useEffect(() => {
    console.log('effect invoked');
    return () => console.log('effect detected');
  }, [firstSwiper, secondSwiper]);
  return (
    <>
      <Swiper
        spaceBetween={100}
        slidesPerView={1}
        onSlideChange={() => console.log('slide1 change')}
        controller={{ control: secondSwiper }}
        onSwiper={setFirstSwiper}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
      <Swiper
        spaceBetween={100}
        slidesPerView={1}
        onSlideChange={() => console.log('slide2 change')}
        controller={{ control: firstSwiper }}
        onSwiper={setSecondSwiper}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Exam;

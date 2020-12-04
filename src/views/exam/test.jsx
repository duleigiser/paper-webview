import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Controller, Thumbs]);
const Test = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const slides = [];
  const slides2 = [];
  const thumbs = [];
  for (let i = 0; i < 5; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag='li' style={{ listStyle: 'none' }}>
        <img src={`https://picsum.photos/id/${i}/500/300`} alt={`slide ${i}`} />
      </SwiperSlide>
    );
    slides2.push(
      <SwiperSlide key={`slide-${i + 5}`} tag='li' style={{ listStyle: 'none' }}>
        <img src={`https://picsum.photos/id/${i + 10}/500/300`} alt={`slide ${i + 5}`} />
      </SwiperSlide>
    );
    thumbs.push(
      <SwiperSlide key={`thumbs${i}`} tag='li' style={{ listStyle: 'none' }}>
        <img src={`https://picsum.photos/id/${i}/163/100`} alt={`thumbs ${i}`} />
      </SwiperSlide>
    );
  }

  return (
    <>
      <Swiper
        id='main'
        tag='section'
        width={window.innerHeight}
        wrapperTag='ul'
        navigation
        spaceBetween={0}
        slidesPerView={1}
        thumbs={{ swiper: thumbsSwiper }}
        controller={{ control: controlledSwiper }}
        onInit={() => console.log('slide initialized')}
        onSlideChange={swiper => console.log('slide change to', swiper.activeIndex)}
        onReachEnd={() => console.log('slide end')}>
        {slides}
      </Swiper>

      <Swiper
        id='thumbs'
        spaceBetween={5}
        slidesPerView={3}
        watchSlidesVisibility
        watchSlidesProgress
        onSwiper={setThumbsSwiper}>
        {thumbs}
      </Swiper>

      <Swiper
        id='controller'
        tag='section'
        wrapperTag='ul'
        navigation
        spaceBetween={0}
        slidesPerView={1}
        onInit={() => console.log('slide initialized')}
        onSlideChange={swiper => console.log('slide change to', swiper.activeIndex)}
        onReachEnd={() => console.log('slide end')}
        onSwiper={setControlledSwiper}>
        {slides2}
      </Swiper>
    </>
  );
};
export default Test;

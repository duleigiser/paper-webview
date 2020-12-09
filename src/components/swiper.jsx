import { Swiper, SwiperSlide } from 'swiper/react';
import { CDN } from '@/config/constant';
import Drag from './drag';
import './swiper.scss';
import data from '../config/paper.json';
let superSwiper;
let subSwiper;
const NEXT = 'next';
const PREV = 'prev';
const SwiperComp = () => {
  const superSwiperCurrentIndex = 0;
  const slides = [];
  const slides2 = [];
  console.log(data);
  const superSwiperChange = swiper => {
    // console.log(swiper.activeIndex)
    // if(swiper.swipeDirection==='next') {
    //   subSwiper.slideNext(500, false)
    // } else {
    //   subSwiper.slidePrev(500, false)
    // }
    // setSuperSwiperIndex(swiper.activeIndex)
  };
  // 滑动最后一个小题 滑动大题
  function subSwiperTransitionEnd(swiper) {
    let { isBeginning, isEnd } = swiper;
    if (swiper.swipeDirection === NEXT) {
      // 往右滑动
      changeSlide(isEnd, swiper, NEXT);
    } else {
      // 往左滑动
      changeSlide(isBeginning, swiper, PREV);
    }
  }
  /**
   *
   * @param {Boolean} isLast 是否是最后一个，或者是第一个
   * @param {swiper} swiper
   * @param {String} type 同时作为左右标识，和重复滑动标志
   */
  function changeSlide(isLast, swiper, type) {
    if (!isLast) return; // 第一个slide才会处理, 最后一个slide才会处理
    console.log(swiper[type]);
    if (swiper[type] === undefined) swiper[type] = true;
    else {
      type === 'prev' ? superSwiper.slidePrev() : superSwiper.slideNext();
      swiper[type] = undefined;
    }
  }
  function superSlide() {
    return (
      data &&
      data.questionList.map((item, index) => {
        switch (item.questionType) {
          case 'READING_COMPREHENSION':
            return (
              <SwiperSlide key={`slide-${index}`} style={{ width: '100%' }}>
                <div>完形填空(10分)</div>
                <div className='questionContent' dangerouslySetInnerHTML={{ __html: item.questionContent }}></div>
              </SwiperSlide>
            );
          case '"COMPREHENSIVE"':
            return (
              <SwiperSlide
                key={`slide-${index}`}
                dangerouslySetInnerHTML={{ __html: item.questionContent }}></SwiperSlide>
            );
          case 'MANY_TO_MANY':
            return (
              <SwiperSlide
                key={`slide-${index}`}
                dangerouslySetInnerHTML={{ __html: item.questionContent }}></SwiperSlide>
            );
          case 'ESSAY':
            return (
              <SwiperSlide
                key={`slide-${index}`}
                dangerouslySetInnerHTML={{ __html: item.questionContent }}></SwiperSlide>
            );
          default:
            return null;
        }
      })
    );
  }
  for (let i = 0; i < 5; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} style={{ listStyle: 'none' }}>
        <img src={`${CDN}/pc/articles/rec${i + 1}.png`} alt={`slide ${i}`} />
      </SwiperSlide>
    );
    slides2.push(
      <SwiperSlide key={`slide-${i + 5}`} style={{ listStyle: 'none' }}>
        <img src={`${CDN}/pc/articles/rec${i + 1}.png`} alt={`slide ${i + 5}`} />
      </SwiperSlide>
    );
  }
  return (
    <>
      <Swiper
        id='main'
        spaceBetween={0}
        slidesPerView={1}
        initialSlide={superSwiperCurrentIndex}
        onSwiper={swiper => (superSwiper = swiper)}
        onTransitionEnd={swiper => console.log(swiper, 'transitionend')}
        onSlideChange={superSwiperChange}
        onReachEnd={() => console.log('slide end')}>
        {/* {slides} */}
        {superSlide()}
      </Swiper>
      <Drag>
        <Swiper
          id='controller'
          className='subSwiper'
          spaceBetween={0}
          slidesPerView={1}
          onSwiper={swiper => (subSwiper = swiper)}
          onTransitionEnd={subSwiperTransitionEnd}>
          {slides2}
        </Swiper>
      </Drag>
    </>
  );
};
export default SwiperComp;

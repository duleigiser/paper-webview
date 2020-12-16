import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CDN } from '../../config/constant';
import 'swiper/swiper-bundle.css';
import './style.scss';
let superSwiper;
let subSwiper;
const NEXT = 'next';
const PREV = 'prev';
let draggableEle;
let dropBoxEle;

let touchstartnY;
// let touchPointRelativeDragDomY;
let relativeY = (window.innerHeight * 1) / 3;
let relativeY_min = (window.innerHeight * 1) / 5; // 拖动组件最大值
let relativeY_max = (window.innerHeight * 4) / 5; // 拖动组件最小值
let subSwipperHeight;

const Test = () => {
  const [superSwiperCurrentIndex, setSuperSwiperIndex] = useState(2);
  console.log(setSuperSwiperIndex);
  const slides = [];
  const slides2 = [];

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
  /**
   * 阻止页面滚动
   * @param
   * @return
   */
  function preventScroll(e) {
    e.preventDefault();
  }
  function onTouchStart(e) {
    document.body.addEventListener('touchmove', preventScroll, { passive: false });
    draggableEle = document.getElementById('dragDom');
    touchstartnY = window.innerHeight - e.touches[0].pageY;
    // touchPointRelativeDragDomY = e.changedTouches[0].pageY - draggableEle.offsetTop
  }

  function onTouchMove(e) {
    draggableEle = document.getElementById('dragDom');
    dropBoxEle = document.getElementById('dropBox');
    // event.preventDefault(); //阻止移动
    // 本次移动的距离，手指按下到抬起的距离
    const currentMoveY = window.innerHeight - e.touches[0].pageY - touchstartnY; // 向上滑动为正数 向下滑动为负数
    // dragBar到屏幕顶部的距离
    subSwipperHeight = relativeY + currentMoveY;
    // 最大值和最小值的拦截
    if (subSwipperHeight < relativeY_min || subSwipperHeight > relativeY_max) return;

    dropBoxEle.style.height = draggableEle.style.bottom = subSwipperHeight + 'px';
    // this.superSwiperContent.style.height = document.body.clientHeight - this.subSwipperHeight - 50 + 'px'
  }
  function onTouchEnd(e) {
    document.body.removeEventListener('touchmove', preventScroll);
    relativeY = subSwipperHeight;
  }
  return (
    <div className='contianer'>
      <Swiper
        id='main'
        width={window.innerHeight}
        spaceBetween={0}
        slidesPerView={1}
        initialSlide={superSwiperCurrentIndex}
        onSwiper={swiper => (superSwiper = swiper)}
        onTransitionEnd={swiper => console.log(swiper, 'transitionend')}
        onSlideChange={superSwiperChange}
        onReachEnd={() => console.log('slide end')}>
        {slides}
      </Swiper>

      <div
        id='dragDom'
        className='bar'
        draggable='true'
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ bottom: relativeY + 'px' }}>
        <div className='barbox'>
          <div className='shortline'></div>
          <div className='shortline'></div>
        </div>
      </div>

      <div
        className='dropBox content'
        onDrop={() => {
          this.onDrop();
        }}
        onDragOver={() => {
          this.onDragOver();
        }}
        id='dropBox'
        style={{ height: relativeY + 'px' }}>
        <Swiper
          id='controller'
          className='subSwiper'
          spaceBetween={0}
          slidesPerView={1}
          //eslint-disable-next-line
          onSwiper={swiper => (subSwiper = swiper)}
          // onTransitionStart={subSwiperTransitionStart}
          onTransitionEnd={subSwiperTransitionEnd}>
          {slides2}
        </Swiper>
      </div>
    </div>
  );
};
export default Test;

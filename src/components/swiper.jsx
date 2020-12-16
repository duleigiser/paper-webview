import { Swiper, SwiperSlide } from 'swiper/react';
// import { CDN } from '@/config/constant';
import { useState, useCallback, useEffect } from 'react';
import Drag from './drag';
import SingleChoice from './singleChoice';
import 'swiper/swiper-bundle.css';
// import data from '../config/paper.json';
import './swiper.scss';
import { filterContent } from '@/utils';
import { transformOption } from '@/utils/chooseUtil';
// import api from '@/api/paper'
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { setUserInfo as setUserInfoAction } from '../actions/user';
import { updateQuestionList as setQuestionListAction } from '../actions/exam';
let superSwiper;
let subSwiper;
const NEXT = 'next';
const PREV = 'prev';
let initRelativeY = (window.innerHeight * 1) / 3;

const SwiperComp = () => {
  const superSwiperCurrentIndex = 0;
  const [relativeY, changeRelativeY] = useState(initRelativeY);

  const { questionList, age, option, status } = useSelector(state => {
    console.log('useselector 计算');
    return {
      age: state.user.age || '',
      questionList: state.exam.questionList,
      superSwiperCurrentIndex: state.exam.superSwiperCurrentIndex,
      option: state.exam.option,
      status: state.exam.status
    };
  }, shallowEqual);
  const dispatch = useDispatch();

  const changeQuestionList = useCallback(
    (option, status) => {
      console.log(option, status);
      dispatch(
        setQuestionListAction({
          option,
          status
        })
      );
    },
    [status, option, dispatch]
  );

  const superSwiperChange = swiper => {};
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
  // 上边swiperslide 渲染
  function superSlide() {
    return questionList.map((item, index) => {
      switch (item.questionType) {
        case 'READING_COMPREHENSION':
          return (
            <SwiperSlide key={`slide-${index}`} style={{ width: '100%' }}>
              <div>完形填空(10分)</div>
              <div
                className='questionContent'
                dangerouslySetInnerHTML={{ __html: filterContent(item.questionContent) }}></div>
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
              key={`slide-${index}1`}
              dangerouslySetInnerHTML={{ __html: item.questionContent }}></SwiperSlide>
          );
        case 'ESSAY':
          return (
            <SwiperSlide
              key={`slide-${index}2`}
              dangerouslySetInnerHTML={{ __html: item.questionContent }}></SwiperSlide>
          );
        default:
          return null;
      }
    });
  }
  /**
   * 改变选择题和判断题的状态
   * @param status true-选中 false-取消
   * @param option 选项索引
   * @param subjectNum 大题题号
   * @param subjectSection 题目区域 super-大题 sub-小题
   * @return null
   */
  const clickItem = (status, option, subjectNum, subjectSection) => {
    console.log(status, option, subjectNum, subjectSection);
    changeQuestionList(option, status);
  };
  useEffect(() => {
    console.log('effect invoked');
  });
  console.log('func swiper render');
  // 下边swiperslde 渲染
  function subSlide() {
    return questionList[superSwiperCurrentIndex].subQuestion.map((item, index) => {
      console.log(questionList, 'subslide');
      switch (questionList[superSwiperCurrentIndex].questionType) {
        case 'READING_COMPREHENSION':
          return (
            <SwiperSlide key={`subslide-${index}`} style={{ width: '100%' }}>
              <SingleChoice
                data={transformOption(item)}
                clickItem={(status, option) => {
                  clickItem(status, option, index, 'sub');
                }}
              />
            </SwiperSlide>
          );
        case '"COMPREHENSIVE"':
          return (
            <SwiperSlide
              key={`subslide-${index}`}
              dangerouslySetInnerHTML={{ __html: item.questionContent }}></SwiperSlide>
          );
        case 'MANY_TO_MANY':
          return <SwiperSlide key={`subslide-${index}`}></SwiperSlide>;
        case 'ESSAY':
          return <SwiperSlide key={`subslide-${index}1`}></SwiperSlide>;
        default:
          return null;
      }
    });
  }
  function relativeYChange(_relativeY) {
    // console.log(_relativeY)
    changeRelativeY(_relativeY);
  }
  const addAge = useCallback(() => {
    dispatch(
      setUserInfoAction({
        age: age + 1
      })
    );
  }, [age, dispatch]);
  return (
    <>
      <button onClick={addAge}>age+1</button>
      <div>{age}</div>
      <Swiper
        id='main'
        style={{ height: window.innerHeight - relativeY - 10 + 'px' }}
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
      <Drag relativeY={relativeY} relativeYChange={relativeYChange}>
        <Swiper
          id='controller'
          className='subSwiper'
          spaceBetween={0}
          slidesPerView={1}
          onSwiper={swiper => (subSwiper = swiper)}
          onTransitionEnd={subSwiperTransitionEnd}>
          {/* {slides2} */}
          {subSlide()}
        </Swiper>
      </Drag>
    </>
  );
};
export default SwiperComp;

import './drag.scss';
let touchstartnY;
let relativeY = (window.innerHeight * 1) / 3;
let relativeY_min = (window.innerHeight * 1) / 5; // 拖动组件最大值
let relativeY_max = (window.innerHeight * 4) / 5; // 拖动组件最小值
let draggableEle;
let dropBoxEle;
let subSwipperHeight;

const Drag = props => {
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
  /**
   * 释放拖动元素事件 兼容处理 在Firefox3.5+中，放置事件的默认行为是打开被放到放置目标上的URL，为了兼容性，需要取消drop事件的默认行为
   * @param
   * @return
   */
  function onDrop(ev) {
    ev.preventDefault();
  }

  /**
   * 拖动元素事件 兼容处理 dragover事件的默认行为是该元素不允许其他元素放入，阻止默认行为之后，其他元素即可放入
   * @param
   * @return
   */
  function onDragOver(ev) {
    ev.preventDefault();
  }

  return (
    <>
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
          onDrop();
        }}
        onDragOver={() => {
          onDragOver();
        }}
        id='dropBox'
        style={{ height: relativeY + 'px' }}>
        {props.children}
      </div>
    </>
  );
};
export default Drag;

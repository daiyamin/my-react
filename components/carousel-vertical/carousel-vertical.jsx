import React from 'react';
import ReactDom from 'react-dom';
import './carousel-vertical.css';
import debounce from 'modules/debounce.js';
const content = ['第一个', '第二个', '第三个', '第四个', '第五个', '第六个', '第七个', '第八个'];
export default class CarouselVertical extends React.Component {
  constructor(props) {
    super(props);
    // timeInterval,滚动间隔时间
    // carouseControl 是否显示控制器
    this.autoTimer = null;
    this.currentCarouselIndex = 1;
    this.maxCarouselTime = content.length;
    this.carouselVerticalWrapDom = null;
    this.isAnimating = false;
    this.isTouching = false;
  }
  render() {
    return (
      <div className="carousel-vertical-container">
        <div className="carousel-vertical-wrap carousel-vertical-wrap__dynamic" ref="carouselVerticalWrap">
          {
            <div className="J_carouselVerticalItem carousel-vertical-item">{content[content.length - 1]}</div>
          }
          {
            content.map((carouselItem, i) => (
              <div className="J_carouselVerticalItem carousel-vertical-item" key={i + 1}>{carouselItem}</div>
            ))
          }
          {
            <div className="J_carouselVerticalItem carousel-vertical-item">{content[0]}</div>
          }
        </div>
        <div className="carousel-vertical-control" ref="carouselVerticalControl">
        {
            content.map((carouselItem, i) => (
              <div
                className="J_carouselVerticalControlItem carousel-vertical-control__item-wrap"
                data-index={i + 1}
                onClick={this.handleControlClick}
                key={i + 1}
              >
                <div className="carousel-vertical-control__item-content"></div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }

  componentDidMount() {
    const carouselVerticalWrapDom = this.carouselVerticalWrapDom = ReactDom.findDOMNode(this.refs.carouselVerticalWrap);
    this.resetAutoLoop();
    const self = this;
    carouselVerticalWrapDom.addEventListener('transitionend', this.transtionEndFunc, false);
    carouselVerticalWrapDom.addEventListener('touchstart', (e) => {
      if(self.isAnimating) return;
      self.isTouching = true;
      e.preventDefault();
      self.clearAutoLoop();
      self.touchstartY = e.changedTouches[0].pageY;
    });
    carouselVerticalWrapDom.addEventListener('touchmove', (e) => {
      if(self.isAnimating) return;
      e.preventDefault();
      const touchmoveY = e.changedTouches[0].pageY;
      const nowtTranslateY = - self.currentCarouselIndex * 200;
      const translateY = nowtTranslateY + (touchmoveY - self.touchstartY);
      carouselVerticalWrapDom.style.transform = `translate(0, ${translateY}px)`;
    });
    carouselVerticalWrapDom.addEventListener('touchend', (e) => {
      if(self.isAnimating) return;
      e.preventDefault();
      const touchendY = e.changedTouches[0].pageY;
      let gotoIndex = 0;
      if( touchendY - self.touchstartY > 5) {
        gotoIndex = self.currentCarouselIndex - 1;
      } else if(touchendY - self.touchstartY < -5) {
        gotoIndex = self.currentCarouselIndex + 1;
      }
      self.isTouching = false;
      self.goto(gotoIndex);
      self.isAnimating = true;
    });
  }

  handleControlClick = (e) => {
    const currentIndex = e.currentTarget.dataset.index;
    this.clearAutoLoop();
    this.goto(currentIndex);
  }

  goto = (index) => {
    const carouselVerticalWrapDom = this.carouselVerticalWrapDom;
    carouselVerticalWrapDom.classList.add('carousel-vertical-wrap__dynamic');
    const translateY = (- index * 100) + '%';
    carouselVerticalWrapDom.style.transform = `translate(0, ${translateY})`;
    this.currentCarouselIndex = index;
    // this.resetAutoLoop();
    debounce(this.resetAutoLoop, 50)();
  }

  clearAutoLoop = () => {
    clearInterval(this.autoTimer);
    this.autoTimer = null;
  }

  resetAutoLoop = () => {
    if(this.isTouching) return;
    const carouselVerticalWrapDom = this.carouselVerticalWrapDom;
    const maxCarouselTime = this.maxCarouselTime;
    this.autoTimer = setInterval(() => {
      if(this.currentCarouselIndex <= maxCarouselTime) {
        carouselVerticalWrapDom.classList.add('carousel-vertical-wrap__dynamic');
        const translateY = (- (++this.currentCarouselIndex) * 100) + '%';
        carouselVerticalWrapDom.style.transform = `translate(0, ${translateY})`;
      }
    }, 3000);
  }

  transtionEndFunc = () => {
    const carouselVerticalWrapDom = this.carouselVerticalWrapDom;
    const maxCarouselTime = this.maxCarouselTime;
    let currentCarouselIndex = this.currentCarouselIndex;
    if(currentCarouselIndex > maxCarouselTime) {
      currentCarouselIndex = this.currentCarouselIndex = 1;
      carouselVerticalWrapDom.classList.remove('carousel-vertical-wrap__dynamic');
      carouselVerticalWrapDom.style.transform = 'translate(0, -100%)';
    } else if(currentCarouselIndex === 0) {
      currentCarouselIndex = this.currentCarouselIndex = maxCarouselTime;
      carouselVerticalWrapDom.classList.remove('carousel-vertical-wrap__dynamic');
      const translateY = (- currentCarouselIndex * 100) + '%';
      carouselVerticalWrapDom.style.transform = `translate(0, ${translateY})`;
    }
    this.isAnimating = false;
  }
}
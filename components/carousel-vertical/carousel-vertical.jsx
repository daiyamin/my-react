import React from 'react';
import ReactDom from 'react-dom';
import './carousel-vertical.css';
const content = ['第一个', '第二个', '第三个', '第四个'];
const contentWithPlaceholder = content.concat([content[0]]);
export default class CarouselVertical extends React.Component {
  constructor(props) {
    super(props);
    // timeInterval,滚动间隔时间
    // carouseControl 是否显示控制器
    this.autoTimer = null;
    this.currentCarouselIndex = 0;
  }
  render() {
    return (
      <div className="carousel-vertical-container">
        <div className="carousel-vertical-wrap carousel-vertical-wrap__dynamic" ref="carouselVerticalWrap">
          {
            contentWithPlaceholder.map((carouselItem, i) => (
              <div className="J_carouselVerticalItem carousel-vertical-item" key={i}>{carouselItem}</div>
            ))
          }
        </div>
        <div className="carousel-vertical-control" ref="carouselVerticalControl">
        {
            content.map((carouselItem, i) => (
              <div
                className="J_carouselVerticalControlItem carousel-vertical-control__item-wrap"
                data-index={i}
                onClick={this.handleControlClick}
                key={i}
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
    const carouselVerticalWrapDom = ReactDom.findDOMNode(this.refs.carouselVerticalWrap);
    // const carouselVerticalControlDom = ReactDom.findDOMNode(this.refs.carouselVerticalControl);
    const maxCarouselTime = contentWithPlaceholder.length;
    carouselVerticalWrapDom.addEventListener('transitionend webkitTransitionEnd', () => {
      if(this.currentCarouselIndex === maxCarouselTime) {
        this.currentCarouselIndex = 1;
        carouselVerticalWrapDom.classList.remove('carousel-vertical-wrap__dynamic');
        carouselVerticalWrapDom.style.transform = 'translate(0, 0)';
      }
    }, false);
    this.autoTimer = setInterval(() => {
      if(this.currentCarouselIndex < maxCarouselTime) {
        carouselVerticalWrapDom.classList.add('carousel-vertical-wrap__dynamic');
        const translateY = (- (this.currentCarouselIndex++) * 100) + '%';
        carouselVerticalWrapDom.style.transform = `translate(0, ${translateY})`;
      }
    }, 2000);
  }

  handleControlClick = (e) => {
    const currentIndex = e.target.dataset.index;
    console.log(currentIndex);
    // clearInterval(this.autoTimer);
    // this.goto(this.cuttentIndex);
  }
}
// import React from 'react';
// import ReactDOM from 'react-dom';

// import './index.css';
// // import 'antd/dist/antd.css';

// // import { Button, Tabs, Radio} from 'antd';
// import Radio from 'components/radio/radio.jsx';
// import { element } from 'prop-types';
// // const {TabPane} = Tabs;



// const rootElement = document.getElementById('root');

// // class Mouse extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.handleMouseMove = this.handleMouseMove.bind(this);
// //     this.state = { x: 0, y: 0 };
// //   }

// //   handleMouseMove(event) {
// //     this.setState({
// //       x: event.clientX,
// //       y: event.clientY
// //     });
// //   }

// //   render() {
// //     return (
// //       <div onMouseMove={this.handleMouseMove} style={{ height: '100%' }}>
// //         {this.props.render(this.state)}
// //       </div>
// //     );
// //   }
// // }

// // class Cat extends React.Component {
// //   render() {
// //     const mouse = this.props.mouse;
// //     return (
// //       <img src="/cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
// //     );
// //   }
// // }

// // class MoustTracker extends React.Component {
// //   render() {
// //     return (
// //       <Mouse render={data => (
// //          <Cat mouse={data} />
// //       )} />    
// //     );
// //   }
// // }

// class App extends React.Component {
//   state = {
//     value: 1
//   };

//   onChange = e => {
//     console.log('radio checked', e.target.value);
//     this.setState({
//       value: e.target.value
//     });
//   };

//   render() {
//     return (
//       // <Radio.Group onChange={this.onChange} value={this.state.value}>
//         <Radio value={1}></Radio>
//         // <Radio value={2}>B</Radio>
//         // <Radio value={3}>C</Radio>
//         // <Radio value={4}>D</Radio>
//       // </Radio.Group>
//     );
//   }
// }

// ReactDOM.render(<App />, rootElement);

// // function callback(key) {
// //   // alert(key);
// // }

// // const x = [1,2,3,[4,5,[6,7,[8,9,[10,11]]]]];

// // function flatten(array) {
// //   return array.reduce((prev, next) => {
// //     return prev.concat(next instanceof Array ? flatten(next) : next);
// //   }, []);
// // }


// // function flatten1(array) {
// //   while(array.some(item => Array.isArray(item))) {
// //     array = [].concat(...array);
// //   }
// // }

// // flatten1(x);


// // function uniq(array) {
// //   return array.filter((item, index) => {
// //     return array.indexOf(item) === index;
// //   });
// // }

// // uniq([1,2,4,5,9,21,23,12,2,5,7,9]);


import a from './a'
import {b1, b2} from './b'

console.log(`a: ${a.name}`)
console.log(`b1: ${b1.name}; b2: ${b2.name}`)

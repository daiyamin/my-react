import './index.css';
import React from 'react';
import ReactDom from 'react-dom';
import _ from 'lodash';
const root = document.getElementById('root');
const App = (props) => {
  const handleClick = _.debounce(() => {
    console.log('我被点击了');
  }, 5000, {
    maxWait: 1000,
    leading: false,
    trailing: false
  });


  return (
    <div onClick={handleClick} className="btn">点我呀</div>
  );
};

ReactDom.render(<App />, root);
// import {a, b} from './test.js'
// console.log(lodash.has({a: {b: {c: 1}}}, ['a', 'b', 'c']));
// console.log(a, b);
// const btn = document.getElementById('btn');
// btn.addEventListener('click', () => {
//   import(/* webpackChunkName: "print"*/'./print.js').then( _ => {
//     _.handleClick();
//   });
// });
function f() {
  this.g = 1;
}
f.prototype.h = 1;
const o = { a: 1, b: {x: 1, y: 1}, c: [{m: 1, n: 1}, [1,1,1] ]};
const o1 = {a: 2, b: {x: 2, z: 2}};
const o2 =  {a: 3, b: {z: 3}, c: [{m: 3, n: 3}, [3,3,3,3]]};

console.log('_extend', _.extend(o, o1, o2, new f()));
// console.log('_merge', _.merge(o, o1, o2, new f()));
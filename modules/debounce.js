// 防抖函数
export default function debounce(fn, delayTimer) {
  let timer = null;
  clearTimeout(timer);
  return function() {
    timer = setTimeout(() => {
      fn.apply(this, [].slice.call(arguments));
    }, delayTimer);
  }
}
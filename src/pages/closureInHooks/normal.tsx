import React, { useState, useRef, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  let count2 = 0;

  /**
   * 先点击Show alert
   * 然后立即点击另两个按钮，分别打印 0 10
   * 结论：state和函数内常量的区别
   */
  const handleAlertClick = () => {
    setTimeout(() => {
      console.log('count---You clicked on: ' + count); //0
      console.log('count2---You clicked on: ' + count2); // 10
    }, 3000);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>count--Click me</button>
      <button
        onClick={() => {
          count2 = 10;
        }}>
        count2--Click me
      </button>
      <button onClick={handleAlertClick}>Show alert</button>
    </div>
  );
}

export default Example;

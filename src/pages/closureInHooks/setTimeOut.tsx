/**
 * useEffect的闭包陷阱--示例
 * 场景：useEffect中使用定时器
 *
 */
import React, { useState, useRef, useEffect } from 'react';

const SetTimeOut = () => {
  const [count, setCount] = useState(1);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setInterval(() => {
      console.log(count);
      if (ref.current) {
        ref.current.innerHTML = `【时间：${Date.now()}||定时器内的count：${count}】`;
      }
    }, 2000);
  }, []);

  return (
    <div style={{ border: '1px solid black', height: 200 }}>
      <div>
        useEffct中定时打印Count的值：<span ref={ref}></span>
      </div>
      <button onClick={() => setCount(c => c + 1)}>count自增1</button>
      <div>实时的count的值：{count}</div>
    </div>
  );
};

export default SetTimeOut;

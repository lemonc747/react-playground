/**
 * useEffect的闭包陷阱--示例
 *
 * 根本原因：函数创建时形成闭包 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures
 *
 * 原理：useEffect内的函数形成了闭包，其中的依赖的state为执行时的副本
 * 当useEffect依赖没有变化（空数组无依赖，或者无更新），不会重新执行，其中的state也不会更新
 * 所以：useEffect内的函数有异步函数时，函数依赖的state就有可能拿到的不是最新值（发生了变化），导致bug
 *
 * todo：useEffect为什么要形成闭包？可能跟hooks的原理有关
 */
import React, { useState, useRef, useEffect } from 'react';

const SetTimeOut = () => {
  const [count, setCount] = useState(1);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // 场景1：useEffect中使用定时器
    setInterval(() => {
      console.log(count);
      if (ref.current) {
        ref.current.innerHTML = `【时间：${Date.now()}||定时器内的count：${count}】`;
      }
    }, 2000);
    // 场景2：任意异步函数，例如请求
    // 场景3：return的销毁函数
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

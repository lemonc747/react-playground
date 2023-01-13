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

let count2 = 0;

const SetTimeOut = () => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  const timerFn = () =>
    setTimeout(() => {
      if (ref.current) {
        ref.current.innerHTML = `【时间：${Date.now()}||定时器内的count：${count}】||变量count2：${count2}`;
      }
    }, 5000);

  useEffect(() => {
    // 场景1：useEffect中使用定时器
    timerFn();
    // 场景2：任意异步函数，例如请求
    // 场景3：return的销毁函数
  }, []);

  return (
    <div style={{ border: '1px solid black', height: 200 }}>
      <div>
        useEffct中定时打印Count的值：<span ref={ref}></span>
      </div>
      <button
        onClick={() => {
          setCount(c => c + 1);
          count2 = count2 + 1;
        }}>
        count自增1
      </button>
      <button onClick={() => timerFn()}>手动开启一个定时器</button>
      <div>实时的count的值：{count}</div>
      <div style={{ color: 'red' }}>bug现象：无论count的值如何改变，定时器内的count都是初始值</div>
    </div>
  );
};

export default SetTimeOut;

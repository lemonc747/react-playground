/**
 * useEffect的闭包陷阱--示例
 */
import React, { useState, useEffect } from 'react';
import Example from './normal';
import SetTimeOut from './setTimeOut';

const ClosureInHooks = () => {
  return (
    <div>
      <SetTimeOut />
      <Example />
    </div>
  );
};

export default ClosureInHooks;

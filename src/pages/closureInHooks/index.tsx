/**
 * useEffect的闭包陷阱--示例
 */
import React, { useState, useEffect } from 'react';
import SetTimeOut from './setTimeOut';

const ClosureInHooks = () => {
  return (
    <div>
      <SetTimeOut />
    </div>
  );
};

export default ClosureInHooks;

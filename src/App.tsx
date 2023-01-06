import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import CompA from './pages/a';
import CompB from './pages/b';
import CompRoute from './pages/route';
import ClosureInHooks from './pages/closureInHooks';

function App() {
  const a = (a: number) => {
    console.log('111', a);
  };
  return (
    <div className='App'>
      <div className='sider'>
        <nav>
          <Link to='/'>Home</Link>
        </nav>
        <nav>
          <Link to='/ClosureInHooks'>UseEffct的闭包陷阱</Link>
        </nav>
        <nav>
          <Link to='route'>路由</Link>
        </nav>
      </div>
      <div className='component'>
        <Routes>
          <Route path='/' element={<CompA />} />
          <Route path='route/*' element={<CompRoute />} />
          <Route path='about' element={<CompB />} />
          <Route path='/ClosureInHooks' element={<ClosureInHooks />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

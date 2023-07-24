import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import CompA from './pages/a';
import CompB from './pages/b';
import CompRoute from './pages/route';
import ClosureInHooks from './pages/closureInHooks';
import DndKit from './pages/dndKit';

function App() {
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
        <nav>
          <Link to='/dndkit'>拖放组件</Link>
        </nav>
      </div>
      <div className='component'>
        <Routes>
          <Route path='/' element={<CompA />} />
          <Route path='route/*' element={<CompRoute />} />
          <Route path='about' element={<CompB />} />
          <Route path='/ClosureInHooks' element={<ClosureInHooks />} />
          <Route path='/dndkit' element={<DndKit />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

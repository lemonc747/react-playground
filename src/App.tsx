import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import CompA from './pages/a';
import CompB from './pages/b';
import CompRoute from './pages/route';

function App() {
  const a = (a: number) => {
    console.log('111', a);
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <nav>
          <Link to='/'>Home</Link>
        </nav>
        <nav>
          <Link to='/about'>About</Link>
        </nav>
        <nav>
          <Link to='route'>路由</Link>
        </nav>
        <Routes>
          <Route path='/' element={<CompA />} />
          <Route path='route/*' element={<CompRoute />} />
          <Route path='about' element={<CompB />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import CompA from './pages/a';
import CompB from './pages/b';

function App() {
  const a = (a: number) => {
    console.log('111', a);
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {/* <h1>Welcome to React Router!</h1> */}
        <nav>
          <Link to='/about'>About</Link>
        </nav>
        <nav>
          <Link to='/'>Home</Link>
        </nav>
        <Routes>
          <Route path='/' element={<CompA />} />
          <Route path='about' element={<CompB />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

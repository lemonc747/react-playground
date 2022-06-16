import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
	const a = (a: number) => {
		console.log("a", a);
	};
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<h1>Welcome to React Router!</h1>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='about' element={<About />} />
				</Routes>
			</header>
		</div>
	);
}

export default App;

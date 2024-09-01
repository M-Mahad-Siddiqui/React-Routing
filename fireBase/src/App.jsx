import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';

// import { ToastContainer } from 'react-toastify';


function App() {
  return (
		<BrowserRouter>
      <Routes>
				<Route path = "/home" element = {<Home />} />
				<Route path = "/" element     = {<Login />} />
      </Routes>
      {/* <ToastContainer /> ToastContainer is used to show toast notifications */}
		</BrowserRouter>
	);
}
  
export default App

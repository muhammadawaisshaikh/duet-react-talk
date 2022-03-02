import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './layout/Header';
import About from './components/about/About';
import Homepage from './components/homepage/Homepage';
import Login from './components/auth/Login';
import Signup from './components/auth/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/ >

        <Routes>
          <Route path="" element={<Homepage />} />
          <Route path="homepage" element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

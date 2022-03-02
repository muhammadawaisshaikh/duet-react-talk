import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import About from './components/about/About';
import Homepage from './components/homepage/Homepage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Homepage />} />
          <Route path="homepage" element={<Homepage />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

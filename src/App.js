import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';

// Import style
import './static/scss/style.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<h1>About</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

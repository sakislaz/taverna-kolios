
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookTablePage from './pages/BookTablePage';
import BookUmbrellaPage from './pages/BookUmbrellaPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-table" element={<BookTablePage />} />
        <Route path="/book-umbrella" element={<BookUmbrellaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

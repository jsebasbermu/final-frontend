// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import ShowBook from './components/ShowBook';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/create-book" element={<AddBook />} />
        <Route path="/show-book/:id" element={<ShowBook />} />
      </Routes>
    </Router>
  );
}

export default App;

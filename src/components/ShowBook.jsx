// src/components/ShowBook.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ShowBook() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      // Locally
      //.get(`http://localhost:5000/api/v1/book/${id}`)
      // Using render
      .get(`https://final-backend-ltlo.onrender.com/api/v1/book/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBook');
      });
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{book.title}</h1>
      <h2>Author: {book.author}</h2>
      <p>{book.description}</p>
      <a href="/">Back to List</a>
    </div>
  );
}

export default ShowBook;

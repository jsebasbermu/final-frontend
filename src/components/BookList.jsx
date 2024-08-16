// src/components/BookList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const handleDelete = (e) => {
  e.preventDefault();
  axios
     // Locally
    //.delete(`http://localhost:5000/api/v1/book/${id}`)
    // Using render
    .delete(`https://final-backend-ltlo.onrender.com/api/v1/book/${id}`)
    .then(() => navigate('/'))
    .catch((err) => console.log('Error in AddBook:', err));
};

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      // Locally
      .get('http://localhost:5000/api/v1/book')
      // Using render

      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log('Error from BookList');
      });
  }, []);

  const bookList =
    books.length === 0
      ? 'There is no book record!'
      : books.map((book, k) => (
          <div key={k} className="card-container">
            <img
              src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
              alt="Books"
              height="200"
            />
            <div className="desc">
              <h2>
                <Link to={`/show-book/${book._id}`}>{book.title}</Link>
              </h2>
              <h3>{book.author}</h3>
              <p>{book.description}</p>
              <button>X</button>
            </div>
          </div>
        ));

  return (
    <div className='BookList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Books List</h2>
          </div>

          <div className='col-md-11'>
            <Link to='/create-book' className='btn btn-outline-warning float-right'>
              + Add New Book
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{bookList}</div>
      </div>
    </div>
  );
}

export default BookList;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const [book, setBook] = useState({ title: '', author: '', description: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
       // Locally
      //.post('http://localhost:5000/api/v1/book', { book })
      // Using render
      .post('https://final-backend-ltlo.onrender.com/api/v1/book', { book })
      .then(() => navigate('/'))
      .catch((err) => console.log('Error in AddBook:', err));
  };

  return (
    <div className="CreateBook">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add Book</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  className="form-control"
                  value={book.title}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  className="form-control"
                  value={book.author}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  className="form-control"
                  value={book.description}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-info btn-block mt-4">
                Add Book
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBook;

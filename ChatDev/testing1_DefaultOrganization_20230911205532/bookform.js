// Form to add a new book
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../reducers/bookReducer';
const BookForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ title }));
    setTitle('');
  };
  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default BookForm;
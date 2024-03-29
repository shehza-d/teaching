// Display the list of books
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeBook } from "../reducers/bookReducer";
const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <h2>Book List</h2>
      {books.map((book) => (
        <div key={book.id}>
          <span>{book.title}</span>
          <button onClick={() => handleRemoveBook(book.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};
export default BookList;

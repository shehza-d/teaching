// Main app component
import React from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
const App = () => {
  return (
    <div>
      <BookList />
      <BookForm />
    </div>
  );
};
export default App;
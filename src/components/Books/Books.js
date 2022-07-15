import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../Book/Book';
import AddBookForm from '../AddBookForm/AddBookForm';

const Books = () => {
  const addedBooks = useSelector((state) => state.book);

  return (
    <div className="Books">
      {addedBooks.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}

      <AddBookForm />
    </div>
  );
};

export default Books;

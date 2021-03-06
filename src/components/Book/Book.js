import React from 'react';
import { useDispatch } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { removeBookApi } from '../../redux/books/books';

import './book.css';

const Book = (props) => {
  const {
    title, author, category, id,
  } = props;

  const dispatch = useDispatch();

  const removeBookHandler = () => {
    dispatch(removeBookApi(id));
  };

  return (
    <div className="book">
      <div className="book-details">
        <p className="category">{category}</p>
        <h2 className="title">{title}</h2>
        <p className="author">{author}</p>
        <ul className="action-buttons">
          <li>
            <button type="button" className="btn btn-comments">
              Comments
            </button>
          </li>
          <li>
            <button onClick={removeBookHandler} type="button" className="btn">
              Remove
            </button>
          </li>
          <li>
            <button type="button" className="btn">
              Edit
            </button>
          </li>
        </ul>
      </div>
      <div className="book-status">
        <CircularProgress
          sx={{
            color: '#0290ff',
          }}
          size={75}
          variant="determinate"
          value={65}
        />

        <div className="complete-status">
          <span className="percent">64%</span>
          <p className="text-gray">Completed</p>
        </div>
      </div>
      <div className="book-chapter">
        <div className="chapter-title">
          <p className="chapter">CURRENT CHAPTER</p>
          <p className="chapter-title">Chapter 17</p>
        </div>
        <button type="button" className="btn btn--primary">
          UPDAE PROGRESS
        </button>
      </div>
    </div>
  );
};

export default Book;

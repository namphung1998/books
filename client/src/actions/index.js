import {
  FETCH_BOOKS_PENDING,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILED,
  SELECT_BOOK,
  UPDATE_BOOK_SUCCESS,
  UPDATE_BOOK_PENDING,
  EDIT_TEXT_FIELD,
  DELETE_BOOK_PENDING,
  DELETE_BOOK_SUCCESS,
  CREATE_BOOK_PENDING,
  CREATE_BOOK_SUCCESS
} from './types';

export const fetchBooks = () => dispatch => {
  dispatch({ type: FETCH_BOOKS_PENDING });
  fetch('http://localhost:4000/books')
    .then(res => res.json())
    .then(res => dispatch({ type: FETCH_BOOKS_SUCCESS, payload: res }))
    .catch(err => dispatch({ type: FETCH_BOOKS_FAILED, payload: err }));
}

export const updateBook = ({ id, data }, callback) => dispatch => {
  dispatch({ type: UPDATE_BOOK_PENDING });
  fetch('http://localhost:4000/books/' + id, {
    method : 'PUT',
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(res => { 
      dispatch({ type: UPDATE_BOOK_SUCCESS, payload: res });
      callback();
    })
    .catch(console.log);
}

export const selectBook = (id) => dispatch => {
  dispatch({ type: FETCH_BOOKS_PENDING });
  fetch('http://localhost:4000/books/' + id)
    .then(res => res.json())
    .then(res => {
      dispatch({ type: SELECT_BOOK, payload: res });
    })
    .catch(console.log);
}

export const deleteBook = (id, callback) => dispatch => {
  dispatch({ type: DELETE_BOOK_PENDING })
  fetch('http://localhost:4000/books/' + id, {
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(res => {
    dispatch({ type: DELETE_BOOK_SUCCESS });
    callback();
  })
  .catch(console.log);
}

export const edit = (name, event) => {
  return {
    type: EDIT_TEXT_FIELD,
    field: name,
    payload: event.target.value
  }
}

export const create = (data, callback) => dispatch => {
  dispatch({ type: CREATE_BOOK_PENDING });
  fetch('http://localhost:4000/books/new', {
    method: 'POST',
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(res => {
      dispatch({ type: CREATE_BOOK_SUCCESS });
      callback();
    })
    .catch(console.log);
}
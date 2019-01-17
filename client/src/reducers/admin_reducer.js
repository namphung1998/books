import {
  FETCH_BOOKS_PENDING,
  SELECT_BOOK,
  UPDATE_BOOK_SUCCESS,
  UPDATE_BOOK_PENDING,
  EDIT_TEXT_FIELD,
  DELETE_BOOK_PENDING,
  DELETE_BOOK_SUCCESS,
  CREATE_BOOK_PENDING,
  CREATE_BOOK_SUCCESS
} from '../actions/types'

const INITIAL_STATE = {
  err: null,
  loading: true,
  selectedBook: null
}

export default (state=INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_BOOKS_PENDING:
      return { ...state, loading: true };
    case SELECT_BOOK:
      return { ...state, loading: false, ...action.payload, author: action.payload.author.name, publisher: action.payload.publisher.name };
    case UPDATE_BOOK_PENDING:
      return { ...state, loading: true }
    case UPDATE_BOOK_SUCCESS: 
      return { ...state, loading: false }
    case EDIT_TEXT_FIELD:
      return { ...state, [action.field]: action.payload }
    case DELETE_BOOK_PENDING:
      return { ...state, loading: true }
    case DELETE_BOOK_SUCCESS:
      return { ...INITIAL_STATE, loading: false };
    case CREATE_BOOK_PENDING:
      return { ...state, loading: true }
    case CREATE_BOOK_SUCCESS:
      return { ...INITIAL_STATE, loading: false }
    default:
      return state;
  }
}
import {
  FETCH_BOOKS_FAILED,
  FETCH_BOOKS_PENDING,
  FETCH_BOOKS_SUCCESS
} from '../actions/types'

const INITIAL_STATE = {
  err: null,
  loading: false,
  books: [],
};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_BOOKS_PENDING:
      return { ...state, loading: true };
    case FETCH_BOOKS_SUCCESS:
      return { ...state, loading: false, books: action.payload };
    case FETCH_BOOKS_FAILED:
      return { ...state, ...INITIAL_STATE, err: action.payload };
    default:
      return state;
  }
}
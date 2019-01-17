import { combineReducers } from 'redux';
import book from './book_reducer';
import admin from './admin_reducer';

export default combineReducers({
  book,
  admin
});
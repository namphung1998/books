import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import Home from './components/HomePage/Home';
import Admin from './components/Admin/Admin';
import EditBook from './components/Admin/EditBook';
import NewBook from './components/Admin/NewBook';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route exact path='/' component={Home}/>
        <Route path='/edit/:id' component={EditBook}/>
        <Route path='/admin' component={Admin}/>
        <Route path='/books/new' component={NewBook}/>
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
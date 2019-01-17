import React, { Component } from 'react';
import 'tachyons';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBooks } from './actions';


class App extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    return (
      <div className='tc'>
        {this.props.children}
      </div>
    ); 
  }
}

export default withRouter(connect(null, { fetchBooks })(App));
import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookList from './BookList';
import Scroll from '../Scroll';
import Header from '../Header';

import { Link, withRouter } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <Link style={{ display: 'flex', justifyContent: 'flex-end', padding: 16}} to='/admin'><h2>Admin Page</h2></Link>
        <Header>
          <p>Bookstore</p>
        </Header>
        <div style={{ backgroundColor: '#bbdefb'}}>
          <Scroll>
            <BookList books={this.props.books} />
          </Scroll>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.book.books,
  };
}

export default withRouter(connect(mapStateToProps)(Home));

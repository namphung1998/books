import React, { Component } from "react";
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Link, withRouter } from 'react-router-dom';

import Header from "../Header";
import AdminBookItem from './AdminBookItem';

import { selectBook, fetchBooks, deleteBook } from '../../actions';

class Admin extends Component {
  onSelect = (id) => {
    this.props.history.push('/edit/' + id);
  }

  onDelete = (id) => {
    this.props.deleteBook(id, () => {
      this.props.fetchBooks();
    });
  }

  render() {
    return (
      <div>
        <Link style={{ display: 'flex', justifyContent: 'flex-end', padding: 16}} to='/'><h2>Home Page</h2></Link>
        <Header>Admin</Header>
        <Card style={{ margin: 24 }}>
          <List>
            {
              this.props.books.map(item => {
                return (
                  <AdminBookItem 
                    onSelect={() => this.onSelect(item._id)} 
                    key={item._id} 
                    imageUri={item.imageUri}
                    onDelete={() => this.onDelete(item._id)}
                  >
                    {item.title}
                  </AdminBookItem>
                )
              })
            }
          </List>
          <Link to='/books/new'>
            <Fab onClick={this.onAddClick} style={{ margin: 24 }} color='primary'>
              <AddIcon/>
            </Fab>
          </Link>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { books: state.book.books };
}

export default withRouter(connect(mapStateToProps, { selectBook, fetchBooks, deleteBook })(Admin));

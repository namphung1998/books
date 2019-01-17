import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Header from '../Header';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateBook, selectBook, edit, fetchBooks } from '../../actions';

class EditBook extends Component {
  componentDidMount() {
    this.props.selectBook(this.props.match.params.id);
  }

  handleChange = name => event => {
    this.props.edit(name, event);
  }

  onButtonPress = () => {
    const { title, price, publicationYear, imageUri } = this.props;

    this.props.updateBook({ 
      id: this.props.match.params.id,
      data: {
        authorName: this.props.author,
        publisherName: this.props.publisher,
        title,
        price,
        publicationYear,
        imageUri
      }
    }, () => {
      this.props.fetchBooks();
      this.props.history.push('/admin')
    })
  }

  render() {
    if (this.props.loading) {
      return <div />
    }
    
    return (
      <div className='justify-center'>
        <Header>Edit</Header>
        <Card style={{ margin: 24 }}>
          <div>
            <TextField
              style={{ margin: 24, width: '70%' }}
              label='Title'
              value={this.props.title}
              onChange={this.handleChange('title')}
            />
            <TextField
              style={{ margin: 24, width: '70%' }}
              label='Author'
              value={this.props.author}
              onChange={this.handleChange('author')}
            />
            <TextField
              style={{ margin: 24, width: '70%' }}
              label='Price'
              value={this.props.price}
              onChange={this.handleChange('price')}
            />
            <TextField
              style={{ margin: 24, width: '70%' }}
              label='Publication Year'
              value={this.props.publicationYear}
              onChange={this.handleChange('year')}
            />
            <TextField
              style={{ margin: 24, width: '70%' }}
              label='Publisher'
              value={this.props.publisher}
              onChange={this.handleChange('publisher')}
            />
            <TextField
              style={{ margin: 24, width: '70%' }}
              label='Image Uri'
              value={this.props.imageUri}
              onChange={this.handleChange('imageUri')}
            />
          </div>
          <Button onClick={this.onButtonPress} style={{ margin: 24 }} variant='contained'>
            <SaveIcon/>
            Save
          </Button>
        </Card>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { title, price, author, publicationYear, publisher, loading, imageUri } = state.admin;

  return { title, price, author, publicationYear, publisher, loading, imageUri };
}

export default withRouter(connect(mapStateToProps, { updateBook, selectBook, edit, fetchBooks })(EditBook));


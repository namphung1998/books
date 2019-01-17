import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import Header from '../Header';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { connect } from 'react-redux';

import { create, fetchBooks } from '../../actions';

class NewBook extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      price: '',
      authorName: '',
      publicationYear: '',
      publisherName: '',
      imageUri: ''
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  onButtonPress = () => {
    this.props.create(this.state, () => {
      this.props.fetchBooks();
      this.props.history.push('/admin');
    })
  }

  render() {
    return (
      <div className="justify-center">
        <Header>Create</Header>
        <Card style={{ margin: 24 }}>
          <div>
            <TextField
              style={{ margin: 24, width: "70%" }}
              label="Title"
              value={this.state.title}
              onChange={this.handleChange("title")}
            />
            <TextField
              style={{ margin: 24, width: "70%" }}
              label="Author"
              value={this.state.authorName}
              onChange={this.handleChange("authorName")}
            />
            <TextField
              style={{ margin: 24, width: "70%" }}
              label="Price"
              value={this.state.price}
              onChange={this.handleChange("price")}
            />
            <TextField
              style={{ margin: 24, width: "70%" }}
              label="Publication Year"
              value={this.state.publicationYear}
              onChange={this.handleChange("publicationYear")}
            />
            <TextField
              style={{ margin: 24, width: "70%" }}
              label="Publisher"
              value={this.state.publisherName}
              onChange={this.handleChange("publisherName")}
            />
            <TextField
              style={{ margin: 24, width: "70%" }}
              label="Image Uri"
              value={this.state.imageUri}
              onChange={this.handleChange("imageUri")}
            />
          </div>
          <Button
            onClick={this.onButtonPress}
            style={{ margin: 24 }}
            variant="contained"
          >
            <SaveIcon />
            Save
          </Button>
        </Card>
      </div>
    );
  }
}

export default connect(null, { create, fetchBooks })(NewBook);

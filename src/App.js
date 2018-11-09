import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomeBooks from './HomeBooks';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends Component {
  state = {
    books: []
  }

  renderBooks() {
    BooksAPI.getAll().then((books) => {
      // console.log(this.renderBooks);
      this.setState({ books });
    });
  }

  componentDidMount() {
    this.renderBooks();
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => {
      this.renderBooks();
    });
  }

  // handleChange = () => {
  //   console.log(this);
  // }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <HomeBooks
            books={this.state.books}
            onUpdateShelf={this.updateShelf}
          />
        )} />
      </div>
    );
  }
}

export default BooksApp;

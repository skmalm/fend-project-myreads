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

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomeBooks from './HomeBooks';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <HomeBooks
            books={this.state.books}
          />
        )} />
      </div>
    );
  }
}

export default BooksApp;

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomeBooks from './HomeBooks';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends Component {
  state = {
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <HomeBooks />
        )} />
      </div>
    );
  }
}

export default BooksApp;

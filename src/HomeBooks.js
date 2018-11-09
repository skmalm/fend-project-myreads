import React, { Component } from 'react';
import CurrentlyReading from './CurrentlyReading';

class HomeBooks extends Component {
  render() {
    const books = this.props.books;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <CurrentlyReading
                crbooks = {books.filter((book) =>
                  (book.shelf === "currentlyReading")
                )}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeBooks;

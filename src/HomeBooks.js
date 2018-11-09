import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import CurrentlyReading from './CurrentlyReading';
import WantToRead from './WantToRead';
import Read from './Read';

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
                onUpdateShelf = {this.props.onUpdateShelf}
                crbooks = {books.filter(book =>
                  (book.shelf === "currentlyReading")
                )}
              />
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <WantToRead
                onUpdateShelf = {this.props.onUpdateShelf}
                wtrbooks = {books.filter(book =>
                  (book.shelf === "wantToRead")
                )}
              />
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <Read
                onUpdateShelf = {this.props.onUpdateShelf}
                rbooks = {books.filter(book =>
                  (book.shelf === "read")
                )}
              />
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link
            to = "/search"
            className = "open-search"
          >Add a book</Link>
        </div>
      </div>
    )
  }
}

export default HomeBooks;

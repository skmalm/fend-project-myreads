import React, { Component } from 'react';

class CurrentlyReading extends Component {
  render() {
    const books = this.props.crbooks;
    const onUpdateShelf = this.props.onUpdateShelf;
    if (books.length > 0) {
      return (
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail}` }}></div>
                    <div className="book-shelf-changer">
                      <select value={book.shelf} onChange={function (event) {
                        onUpdateShelf(book, event.target.value);
                      }}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors.join(', ')}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      );
    } else {
      return (
        <div>You aren't currently reading any books.</div>
      );
    }
  }
}

export default CurrentlyReading;

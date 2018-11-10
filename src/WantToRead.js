import React, { Component } from 'react';

class WantToRead extends Component {
  render() {
    const books = this.props.wtrbooks;
    const onUpdateShelf = this.props.onUpdateShelf;
    if (books.length > 0) {
      return (
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    {book.imageLinks ? (
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail}` }}></div>
                    ) : (
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=nggnmAEAC%E2%80%A6J&printsec=frontcover&img=1&zoom=1&source=gbs_api")' }}></div>
                    )}
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
                  {book.authors ? (
                    <div className="book-authors">{book.authors.join(', ')}</div>
                  ) : (<div className="book-authors">(No Author)</div>)}
                </div>
              </li>
            ))}
          </ol>
        </div>
      );
    } else {
      return (
        <div>You don't currently want to read any books.</div>
      );
    }
  }
}

export default WantToRead;

import React from 'react';
import './App.css';
import Search from './Search';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Title from './Title';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    types: ["Currently Reading", "Want to Read", "Read"],
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  updateShelf = (book, shelf) => {
    book.shelf = shelf;
    BooksAPI.update(book, shelf);
    this.setState({
      books: this.state.books.filter(b => b.id !== book.id).concat([book])
    });
  }

  removeWhiteSpace(str) {
    return str.replace(/\s/g, '').toLowerCase();
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="bookshelf">

              <Title />
              <div className="list-books-content">

                {this.state.types.map((type) =>
                  <BookShelf
                    key={type}
                    name={type}
                    books={this.state.books.filter((book) => book.shelf.toLowerCase() === this.removeWhiteSpace(type))}
                    updateShelf={this.updateShelf}
                  />
                )}

              </div>
            </div>
            <div className="open-search">
              <Link to='/search' >Add a book</Link>
            </div>
          </div>
        )} />

        <Route path='/search' render={({ history }) => (
          <Search updateShelf={this.updateShelf} shelvedBooks={this.state.books} />
        )} />
      </div>
    )
  }
}

export default BooksApp;

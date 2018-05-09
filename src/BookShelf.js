import React, { Component } from 'react'
import Book from './Book'


class BookShelf extends Component {


    render() {
        return (
            <div>
                <h2 className="bookshelf-title">{this.props.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">{this.props.books.map((book) =>
                        <li key={book.title}>
                            <Book
                                title={book.title}
                                author={book.authors[0]}
                                picUrl={book.imageLinks.thumbnail}
                            />
                        </li>
                    )}
                    </ol></div>
            </div>

        )
    }

}

export default BookShelf
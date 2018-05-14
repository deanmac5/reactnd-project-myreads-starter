import React, { Component } from 'react'
import Book from './Book'


class BookShelf extends Component {

    componentDidMount() {
        console.log(this.props)
    }

    showMeBook(title, shelf) {
        console.log(title, shelf);
    }

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
                                shelf={this.props.name}
                                update={this.showMeBook}
                                // update={this.props.updateShelf}
                            />
                        </li>
                    )}
                    </ol>
                </div>
            </div>

        )
    }

}

export default BookShelf
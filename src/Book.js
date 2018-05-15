import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';


class Book extends Component {

    getAuthors = (authors) => {
        return authors ? authors.join(', ') : 'Unknown';
    }

    render() {
        const authors = this.getAuthors(this.props.book.authors);

        return (
            <div className="book">
                <div className="book-top">

                    <div className="book-cover">
                        <img style={{ width: 128, height: 192 }} alt={this.props.book.title} src={this.props.book.imageLinks.thumbnail}></img>
                    </div>
                    <BookShelfChanger book={this.props.book} updateShelf={this.props.updateShelf} />
                   
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{authors}</div>

            </div>
        )
    }

}

export default Book;
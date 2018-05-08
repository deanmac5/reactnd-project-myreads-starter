import React, { Component } from 'react'
import Title from './Title'
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class ShelfList extends Component {

    state = {
        types: ["Currently reading", "Read", "Want to Read"],
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

    render() {


        return (
            <div className="list-books">
                <div className="bookshelf">

                    <Title />
                    <div className="list-books-content">

                        {this.state.types.map((type) =>
                            <BookShelf
                                key={type}
                                name={type}
                                books={this.state.books}
                            />
                        )}

                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search' >Add a book</Link>
                </div>
            </div>
        )
    }

}

export default ShelfList
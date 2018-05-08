import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Title from './Title'
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom'

class ShelfList extends Component {

    state = {
        types: ["Currently reading", "Read", "Want to Read"]
    }

    render() {


        return (
            <div className="list-books">
                <div className="bookshelf">

                    <Title />
                    <div className="list-books-content">

                        {this.state.types.map((type) =>
                            <BookShelf
                                name={type}
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
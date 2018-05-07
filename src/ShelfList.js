import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Title from './Title'
import BookShelf from './BookShelf';

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
            </div>
        )
    }

}

export default ShelfList
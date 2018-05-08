import React, { Component } from 'react'


class BookShelf extends Component {

    render() {
        return (
            <div>
            <h2 className="bookshelf-title">{this.props.name}</h2>
            <p>{this.props.books}</p>
            </div>

        )
    }

}

export default BookShelf
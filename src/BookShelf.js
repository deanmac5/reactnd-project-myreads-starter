import React, { Component } from 'react'


class BookShelf extends Component {

    render() {
        return (
            <h2 className="bookshelf-title">{this.props.name}</h2>

        )
    }

}

export default BookShelf
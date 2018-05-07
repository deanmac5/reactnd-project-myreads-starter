import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

class BookShelf extends Component {

    render() {
        return (
            <h2 className="bookshelf-title">{this.props.name}</h2>

        )
    }

}

export default BookShelf
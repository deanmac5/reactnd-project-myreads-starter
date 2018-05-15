import React, { Component } from 'react'

class BookShelfChanger extends Component {

    componentDidMount() {
        // console.log(this.props)
    }

    handleChange = (event) => {
        this.props.updateShelf(this.props.book, event.target.value);
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.props.book.shelf || 'none'} onChange={this.handleChange}>
                    <option value="placeholder" disabled>Move to...</option>
                    <option value="currentlyReading">Currently reading</option>
                    <option value="wantToRead">Want to read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookShelfChanger;
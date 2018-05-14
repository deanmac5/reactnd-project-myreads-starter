import React, { Component } from 'react'


class BookShelfChanger extends Component {

    handleChange = (event) => {
        this.props.update(this.props.book, event.target.value);
    }

    render() {
        return (
            <div className="book-shelf-changer">

                <select value={this.props.book.shelf || 'none'} onChange={this.handleChange}>
                    <option value="none" disabled>Move to...</option>
                    <option value="Currently reading">Currently reading</option>
                    <option value="Want to read">Want to read</option>
                    <option value="Read">Read</option>

                </select>

            </div>
        )
    }
}

export default BookShelfChanger
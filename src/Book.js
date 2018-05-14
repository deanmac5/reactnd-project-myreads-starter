import React, { Component } from 'react'


class Book extends Component {

    

    componentDidMount() {
        console.log(this.props)
    }

    getAuthors = (authors) => {
        return authors ? authors.join(', ') : 'Unknown';
    }

    handleChange = (event) => {
        this.props.update(this.props.book, event.target.value);
    }

    render() {
        const authors = this.getAuthors(this.props.book.authors);

        return (
            <div className="book">
                <div className="book-top">

                    <div className="book-cover">
                        <img style={{ width: 128, height: 192 }} alt={this.props.book.title} src={this.props.book.imageLinks.thumbnail}></img>
                    </div>
                    {/* <BookShelfChanger book= */}
                    <div className="book-shelf-changer">

                        <select value={this.props.book.shelf} selected={this.props.book.shelf} onChange={this.handleChange}>
                            <option value="none" disabled>Move to...</option>
                            <option value="Currently Reading">Currently Reading</option>
                            <option value="Want to read">Want to read</option>
                            <option value="Read">Read</option>
                         
                        </select>

                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{authors}</div>

            </div>

        )
    }

}

export default Book
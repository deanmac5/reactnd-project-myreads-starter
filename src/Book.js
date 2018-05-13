import React, { Component } from 'react'


class Book extends Component {

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">

                    <div className="book-cover">
                        <img style={{ width: 128, height: 192 }} alt={this.props.title} src={this.props.picUrl}></img>
                    </div>

                    <div className="book-shelf-changer">

                        <select value={this.props.shelf}>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>

                    </div>
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.author}</div>

            </div>

        )
    }

}

export default Book
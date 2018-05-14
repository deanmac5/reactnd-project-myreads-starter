import React, { Component } from 'react'


class Book extends Component {


    componentDidMount() {
        console.log(this.props)
    }

    handleChange = (event) => {
        // console.log(this.props.title);
        // console.log(event.target.value);
        this.props.update(this.props.title, event.target.value);
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">

                    <div className="book-cover">
                        <img style={{ width: 128, height: 192 }} alt={this.props.title} src={this.props.picUrl}></img>
                    </div>

                    <div className="book-shelf-changer">

                        <select value={this.props.shelf} selected={this.props.shelf} onChange={this.handleChange}>
                            <option value="none" disabled>Move to...</option>
                            <option value="Currently Reading">Currently Reading</option>
                            <option value="Want to read">Want to read</option>
                            <option value="Read">Read</option>
                         
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
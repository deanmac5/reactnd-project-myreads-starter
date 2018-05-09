import React, { Component } from 'react'


class Book extends Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                
                    <div className="book-cover">
                     <img style={{ width: 128, height: 192}} alt={this.props.title} src={this.props.picUrl}></img>
                    </div> 
                    <div className="book-shelf-changer">
                    </div>
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.author}</div>

            </div>

        )
    }

}

export default Book
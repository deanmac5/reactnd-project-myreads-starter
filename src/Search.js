import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {

    state = {
        query: '',
        resultBooks: []
    };


    componentDidMount() {

    }

    updateQuery = (query) => {
        if (query) {
            BooksAPI.search(query).then((resultBooks) => {
                this.setState({ resultBooks })
            })
        }
        this.setState(() => ({
            query: query.trim()
        }))
    }


    clearQuery = () => {
        this.updateQuery('')
    }

    render() {

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className='close-search'>Close</Link>
                    {/* <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a> */}
                    <div className="search-books-input-wrapper">
                        {/*
                         NOTES: The search from BooksAPI is limited to a particular set of search terms.
                         You can find these search terms here:
                         https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
      
                         However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                         you don't find a specific author or title. Every search is limited by search terms.
                       */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)} />

                    </div>
                </div>
                <div className="search-books-results">


                    <ol className="books-grid">
                        {
                            this.state.resultBooks.error ? <div>No results</div> :
                                this.state.resultBooks.map((book) =>
                                    <li key={book.id}>
                                        <Book
                                            book={book}
                                            updateShelf={this.props.updateShelf}
                                        />
                                    </li>

                                )}
                    </ol>

                </div>
            </div>
        )
    }

}

export default Search
import { Component } from 'react';


class BookShelf extends Component {

	render() {
		return (
			<div>
				<h2 className="bookshelf-title">{this.props.name}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">{this.props.books.map((book) =>
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

		);
	}

}

export default BookShelf;
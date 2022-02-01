import React, {Component} from "react";
import {getAllBooks} from "../redux/actions/booksActions";
import {connect} from "react-redux";
import BookComponent from "../components/BookComponent";


class BooksPage extends Component {

    componentDidMount() {
        this.props.getAllBooks()
    }


    onClickRedirectToSearch = () => {
        window.location.href = '/search';
    }


    render() {

        const {books} = this.props;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                {
                    books !== undefined && books.length > 0 ? (
                        <div>
                            <div className="list-books-content">
                                <div>
                                    <div className="bookshelf">
                                        <h2 className="bookshelf-title">Currently Reading</h2>
                                        <div className="bookshelf-books">
                                            <ol className="books-grid">
                                                {
                                                    books.map((book) =>
                                                        book.shelf === 'currentlyReading' ? (
                                                            <li key={book.id}>
                                                                <BookComponent book={book}/>
                                                            </li>
                                                        ) : undefined
                                                    )
                                                }
                                            </ol>
                                        </div>
                                    </div>
                                    <div className="bookshelf">
                                        <h2 className="bookshelf-title">Want to Read</h2>
                                        <div className="bookshelf-books">
                                            <ol className="books-grid">
                                                {
                                                    books.map((book) =>
                                                        book.shelf === 'wantToRead' ? (
                                                            <li key={book.id}>
                                                                <BookComponent id={book.id} book={book}/>
                                                            </li>
                                                        ) : undefined
                                                    )
                                                }
                                            </ol>
                                        </div>
                                    </div>
                                    <div className="bookshelf">
                                        <h2 className="bookshelf-title">Read</h2>
                                        <div className="bookshelf-books">
                                            <ol className="books-grid">
                                                {
                                                    books.map((book) =>
                                                        book.shelf === 'read' ? (
                                                            <li key={book.id}>
                                                                <BookComponent book={book}/>
                                                            </li>
                                                        ) : undefined
                                                    )
                                                }
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="open-search">
                                <button onClick={ this.onClickRedirectToSearch }>Add a book</button>
                            </div>
                        </div>
                    ) : undefined
                }

            </div>
        );
    }
}

function mapState(state) {
    return {
        books: state.BooksReducer.books
    };
}

export default connect(mapState,
    {getAllBooks})(BooksPage);

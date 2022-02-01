import React, {Component} from "react";
import {connect} from "react-redux";
import BookComponent from "../components/BookComponent";
import {getAllBooks, searchBooksByQuery} from "../redux/actions/booksActions";


class SearchPage extends Component {

    componentDidMount() {
        this.props.getAllBooks()
    }

    constructor(props) {
        super(props)
        this.state = {queryToSearch: ''}
    }

    onKeyPressToSearch = (query) => {
        this.setState({queryToSearch: query})
        if (query !== '') {
            this.props.searchBooksByQuery(query, [])
        }
    }

    onClickRedirectToBooks = () => {
        window.location.href = '/';
    }


    render() {
        const {queryToSearch} = this.state
        const {books, searchedBooks} = this.props
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={this.onClickRedirectToBooks}>Close
                    </button>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                               onChange={e => this.onKeyPressToSearch(e.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            queryToSearch === '' ? (
                                books !== undefined && books.length > 0 ? (
                                    books.map(book => (
                                        <li key={book.id}>
                                            <BookComponent book={book}/>
                                        </li>
                                    ))
                                ) : undefined
                            ) : (
                                searchedBooks !== undefined && searchedBooks.length > 0 ? (
                                    searchedBooks.map(book => (
                                        <li key={book.id}>
                                            <BookComponent book={book}/>
                                        </li>
                                    ))) : (
                                    <h3> Nothing to show </h3>))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

function mapState(state) {
    return {
        books: state.BooksReducer.books,
        searchedBooks: state.BooksReducer.searchedBooks
    };
}

export default connect(mapState,
    {getAllBooks, searchBooksByQuery})(SearchPage);



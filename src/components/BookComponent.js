import React from "react";
import '../App.css'
import {connect} from "react-redux";
import {changeAnyBookStateByAction} from "../redux/actions/booksActions";

const BookComponent = ({book, changeAnyBookStateByAction}) => {
    return (
        <div key={book.id} className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 188,
                    backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                    <select value={book.shelf}
                            onChange={(event => changeAnyBookStateByAction(book, event.target.value))}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            {
                book.authors !== undefined && book.authors.length > 0 ? (
                    book.authors.map(author =>
                        <div key={author} className="book-authors">{author}</div>
                    )
                ): undefined
            }
        </div>
    )
}

function mapState(state) {return {};}

export default connect(mapState, { changeAnyBookStateByAction })(BookComponent);

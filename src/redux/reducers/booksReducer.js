import {CHANGE_ANY_BOOK_STATE, SEARCH_BOOK, GET_ALL_BOOKS} from '../actions/booksActions'


const initialState = {
    books: [],
    searchedBooks: []
}


export default function (state = initialState, action) {
    switch(action.type) {
        case CHANGE_ANY_BOOK_STATE:
            return {
                ...state
            }
        case SEARCH_BOOK:
            return {
                ...state,
                searchedBooks: action.searchedBooks
            }
        case GET_ALL_BOOKS:
            return {
                ...state,
                books: action.books
            }
        default:
            return state;
    }
}

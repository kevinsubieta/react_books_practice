export const CHANGE_ANY_BOOK_STATE = 'CHANGE_ANY_BOOK_STATE'
export  const SEARCH_BOOK = 'SEARCH_BOOK'
export const GET_ALL_BOOKS = 'GET_ALL_BOOKS'


export const changeAnyBookStateByAction = (book, shelf) => {
    return {
        type: CHANGE_ANY_BOOK_STATE,
        book: book,
        shelf: shelf
    }
}


export const searchBooksByQuery = (query, searchedBooks) => {
    return {
        type: SEARCH_BOOK,
        query: query,
        searchedBooks: searchedBooks
    }
}


export const getAllBooks = (books) => {
    return {
        type: GET_ALL_BOOKS,
        books: books
    }
}

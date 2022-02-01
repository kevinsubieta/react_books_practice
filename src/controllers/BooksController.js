import {get, getAllBookFromService, searchBooksByQueryFromService, updateAnyBookByShelf} from '../api/BooksAPI'

export async function getAllBooks() {
    return await getAllBookFromService()
}

export async function updateAnyBookByIdAndShelf(bookId, shelf) {
    return updateAnyBookByShelf(bookId, shelf)
}

export async function searchAnyBookByQuery(query) {
    return await searchBooksByQueryFromService(query)
}


import {take, put, call} from 'redux-saga/effects'
import * as booksAction from '../actions/booksActions'
import * as booksController from '../../controllers/BooksController'

function* onSearchAnyBook(action) {
    console.log('SEARCH BOOK')
    let booksSearchedFromService = yield call(booksController.searchAnyBookByQuery, action.query)
    yield put(booksAction.searchBooksByQuery(action.query, booksSearchedFromService))
}

function* onLoadAllBooks(action) {
    console.log('LOAD ALL BOOKS')
    let booksFromService = yield call(booksController.getAllBooks)
    yield put(booksAction.getAllBooks(booksFromService))
}

function* onUpdateAnyBook(action) {
    console.log('UPDATE BOOK')
    yield call(booksController.updateAnyBookByIdAndShelf, action.book, action.shelf)
    yield put(booksAction.changeAnyBookStateByAction(action.book, action.shelf))

    let booksFromService = yield call(booksController.getAllBooks)
    yield put(booksAction.getAllBooks(booksFromService))

}


export function* watchOnSearchAnyBook(){
    while(true){
        const action = yield take(booksAction.SEARCH_BOOK)
        yield call(onSearchAnyBook, action)
    }
}

export function* watchOnLoadAllBooks(){
    console.log('On Load all Books')
    while(true){
        const action = yield take(booksAction.GET_ALL_BOOKS)
        yield call(onLoadAllBooks, action)
    }
}

export function* watchOnUpdateAnyBook(){
    while(true){
        const action = yield take(booksAction.CHANGE_ANY_BOOK_STATE)
        yield call(onUpdateAnyBook, action)
    }
}

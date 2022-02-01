import { fork, all} from 'redux-saga/effects'
import * as BookSaga from './booksSaga'

export default function* rootSaga() {
    yield all([
        fork(BookSaga.watchOnLoadAllBooks),
        fork(BookSaga.watchOnSearchAnyBook),
        fork(BookSaga.watchOnUpdateAnyBook),
    ])
}

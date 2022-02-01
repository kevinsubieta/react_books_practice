import {combineReducers} from "redux";
import BooksReducer from "./booksReducer"

const combineAllReducers = combineReducers({
    BooksReducer
});

export default function rootReducer(state, action) {
    return combineAllReducers(state, action);
}

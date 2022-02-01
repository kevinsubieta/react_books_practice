import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App'
import './index.css'
import createSagaMiddleware from 'redux-saga'
import {BrowserRouter} from 'react-router-dom'
import {applyMiddleware, createStore, compose} from "redux";
import {Provider} from "react-redux";
import RootReducer from "./redux/reducers/rootReducer";
import RootSaga from './redux/sagas/rootSaga'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(RootReducer,
    compose(applyMiddleware(sagaMiddleware),
        typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
            window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
);
sagaMiddleware.run(RootSaga);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'))

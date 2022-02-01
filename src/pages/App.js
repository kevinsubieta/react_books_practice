import React from 'react';
import {Fragment} from "react";
import BooksPage from './BooksPage'
import SearchPage from './SearchPage'
import {Route,BrowserRouter} from 'react-router-dom'

function App(){
    return (
        <Fragment>
            <BrowserRouter>
                <Route exact path='/' component={BooksPage}/>
                <Route exact path='/search' component={SearchPage}/>
            </BrowserRouter>
        </Fragment>
    )
}

export default App;

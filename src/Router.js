import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'

const Router = () => {

    return(
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route path='/next' component={Header}/>
        </BrowserRouter>
    )
}
export default Router
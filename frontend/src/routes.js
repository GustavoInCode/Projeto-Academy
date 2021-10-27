import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './pages/Login'
import Profile from './pages/Profile';
import Register from './pages/Register'
import Course from './pages/Course'
import Begin from './pages/begin'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/profile" component={Profile}></Route>
                <Route path="/Course" component={Course}></Route>
                <Route path="/begin" component={Begin}></Route>
            </Switch>
        </BrowserRouter>
    )
}
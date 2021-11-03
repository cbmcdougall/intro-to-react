import React from 'react';
import { Header, Footer } from './layout';
import { Switch, Route } from 'react-router-dom';
import * as Pages from './pages';
import "./style.css"

export const App = () => {
    return (
        <>
            <Header />

            <Switch>
                <Route exact path='/'>
                    <Pages.Home />
                </Route>
                <Route path='/StudioAlbums'>
                    <Pages.StudioAlbums />
                </Route>
                <Route>
                    <h1>Page not found!</h1>
                </Route>
            </Switch>

            <Footer />
        </>
    )
}
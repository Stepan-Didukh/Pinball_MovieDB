import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import MoviesPage from "./conteiner/MoviesPage/MoviesPage";
import {Header} from "./components/Header/Header";
import NotFoundPage from "./conteiner/NotFoundPage/NotFoundPage";

function App() {

    return (
        <Router>



            <Switch>
                <Route exact path="/">
                    <MoviesPage/>
                </Route>

                <Route
                    path="/not-found"
                    render={routeProps => (
                        <NotFoundPage {...routeProps}/>
                    )}
                />

                <Redirect
                    from="*"
                    to={{
                        pathname: '/not-found'
                    }}
                />
            </Switch>
        </Router>
    )
}

export default App;

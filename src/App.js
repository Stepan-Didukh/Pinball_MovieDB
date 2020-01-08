import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import MoviesPage from "./conteiner/MoviesPage/MoviesPage";
import NotFoundPage from "./conteiner/NotFoundPage/NotFoundPage";
import PageLayout from "./components/PageLayout";

function App() {

    return (
        <Router>
            <PageLayout>
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
            </PageLayout>
        </Router>
    )
}

export default App;

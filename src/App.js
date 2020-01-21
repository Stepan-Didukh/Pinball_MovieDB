import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import MoviesPage from "./conteiner/MoviesPage";
import NotFoundPage from "./conteiner/NotFoundPage/NotFoundPage";
import PageLayout from "./components/PageLayout";
import UserInfo from "./conteiner/UserInfo/UserInfo";


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
                <Route path={'/user_info'}>
                    <UserInfo/>
                </Route>

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

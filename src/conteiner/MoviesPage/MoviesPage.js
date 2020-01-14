import React, {Component} from 'react';

import {Header} from '../../components/Header/Header';
import {Main} from '../../components';


class MoviesPage extends Component {

    render() {
        const { getMovies, movies} = this.props;

        return (
            <>
                <Header/>
                <Main
                    getMovies={getMovies}
                    movies={movies}
                />
            </>
        );
    }
}

export default MoviesPage;
import React, {Component} from 'react';
import {MoviesList} from '../index';
import './Main.css'

export default class Main extends Component {
    componentDidMount() {
        const {getMovies} = this.props;

        getMovies();
    }

    render() {
        const {movies} = this.props;
        console.log(movies.results);

        let results = movies.results;
        return (
            <main>
                <MoviesList movies={results}/>
            </main>
        );
    }
}
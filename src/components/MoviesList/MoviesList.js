import React, {Component} from "react";

import {MoviesListCard} from '../index';
import './MovieList.css'

export default class MoviesList extends Component{

    render() {
        const {movies} = this.props;

        return (
            <section className="listFilms">
                {
                    movies && movies.map(movie => {
                        return (
                            <MoviesListCard movie={movie} key={`${movie.id}`}/>
                        );
                    })
                }
            </section>
        );
    }
}

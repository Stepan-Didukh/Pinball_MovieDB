import React, {Component} from "react";

import {MoviesListCard} from '../index';
import './MovieList.css'

export default class MoviesList extends Component{

    render() {
        const {movies, genres} = this.props;
        console.log(movies);

        return (
            <section className="listFilms">
                {
                    movies && movies.map(movie => {
                        return (
                            <MoviesListCard movie={movie} genres={genres} key={`${movie.id}`}/>
                        );
                    })
                }
            </section>
        );
    }
}

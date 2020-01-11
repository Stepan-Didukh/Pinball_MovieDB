import React, {Component} from 'react'
import './MoviesPage.css'
import {Header} from "../../components/Header/Header";
import Movie from "../../components/MoviesList/MoviesList";

class MoviesPage extends Component {

    render() {

        return (
            <div>

                <Header/>
                <Movie/>
            </div>
        )

    }
}

export default MoviesPage;

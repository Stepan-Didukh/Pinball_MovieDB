import {movieFetchData} from '../../actions/getMovies'
import React, {Component} from "react";
import {connect} from "react-redux";

class MoviesList extends Component {

    componentDidMount() {
        this.props.fetchData('3/discover/movie?page=2');
        console.log(this.props.movies);
    }

    // renderFilms = () => {
    //     const {movies} = this.props;
    //     return movies.map(film => {
    //         return (
    //             <div key={film.id}>{film.title}</div>
    //         )
    //     })
    // };

    render() {
        return (
            <div>
                {/*{this.renderFilms()}*/}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        movies: state.movies
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(movieFetchData(url))
    };
};
 const Movie = connect(mapStateToProps, mapDispatchToProps)(MoviesList);
export default Movie
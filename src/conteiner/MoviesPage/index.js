import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import MoviesPageComponent from './MoviesPage';

import {getMovies, getGenres} from '../../actions';


const mapStateToProps = (state) => {
    const {MovieReducer: {movies, loading, genres}} = state;

    return {
        movies,
        loading,
        genres
    };
};

const mapDispatchToProps = {
    getMovies,
    getGenres
};

const MoviesPageWithConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviesPageComponent);

export default withRouter(MoviesPageWithConnect)
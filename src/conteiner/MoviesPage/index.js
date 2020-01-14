import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import MoviesPageComponent from './MoviesPage';

import {getMovies} from '../../actions';


const mapStateToProps = (state) => {
    const {MovieReducer: {movies}} = state;

    return {
        movies
    };
};

const mapDispatchToProps = {
    getMovies
};

const MoviesPageWithConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviesPageComponent);

export default withRouter(MoviesPageWithConnect)
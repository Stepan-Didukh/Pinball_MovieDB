import axios from "axios";
import {FINISH_SHOW_LOADING, GET_FILMS, SHOW_LOADING} from "../actions-types/actions-types";

export const getMovies = () => {
    return (dispatch) => {

        dispatch({
            type:SHOW_LOADING
        })

        return axios.get('https://api.themoviedb.org/3/discover/movie?api_key=29603d2d0c039564d537edefdb94366b')
            .then(({data = {}}) => {

                dispatch({
                    type:FINISH_SHOW_LOADING
                });

                dispatch({
                    type: GET_FILMS,
                    payload: {
                        movies: data
                    }
                });

            })
            .catch(err => {
                console.log(err);
            });
    }
};
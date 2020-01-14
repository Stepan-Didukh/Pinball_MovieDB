import axios from "axios";
import {GET_FILMS} from "../actions-types/actions-types";

export const getMovies = () => {
    return (dispatch) => {

        return axios.get('https://api.themoviedb.org/3/discover/movie?api_key=29603d2d0c039564d537edefdb94366b')
            .then(({data = {}}) => {
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
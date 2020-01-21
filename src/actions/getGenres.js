import axios from "axios";
import {GET_GENRES} from "../actions-types/actions-types";

export const getGenres = () => {
    return (dispatch) => {

        return axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=cc809c60b58f948232bce08b642e354e')
            .then(({data = {}}) => {

                dispatch({
                    type: GET_GENRES,
                    payload: {
                        genres: data
                    }
                });

            })
            .catch(err => {
                console.log(err);
            });
    }
};
import {FINISH_SHOW_LOADING, GET_FILMS, GET_GENRES, SHOW_LOADING} from "../actions-types/actions-types";

const initialState ={
    movies:[],
    genres: {},
    loading:false
};

const MovieReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_FILMS:{
            const {payload:{movies}} =  action;

            return {
                ...state,
                movies
            }
        }
        case GET_GENRES:{
            const {payload: {genres}} = action;

            return {
                ...state,
                genres
            }
        }
        case SHOW_LOADING:{
            return {
                ...state,
                loading:true
            }
        }
        case FINISH_SHOW_LOADING:{
            return {
                ...state,
                loading: false
            }
        }
        default:
            return state
    }
};

export default MovieReducer

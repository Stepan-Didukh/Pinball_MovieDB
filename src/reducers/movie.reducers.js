import {GET_FILMS} from "../actions-types/actions-types";

const initialState ={
    movies:[]
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
        default:
            return state
    }
};

export default MovieReducer

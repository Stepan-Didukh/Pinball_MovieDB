import {GET_FILMS} from "../actions-types/actions-types";

const intialState = {
    getFilms: []
};

const ListFilm = (action, state = intialState) => {

    switch (action.type) {
        case GET_FILMS: {

            const {payload: {films}} = action;
            return {
                ...state,
                getFilms: films
            }
        }
        default:
            return state
    }
};

export default ListFilm;
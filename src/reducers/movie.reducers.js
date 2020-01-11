import {GET_FILMS} from "../actions-types/actions-types";

export function movie(state = [], action) {
    switch (action.type) {
        case GET_FILMS:
            return action.data;
        default:
            return state

    }
}

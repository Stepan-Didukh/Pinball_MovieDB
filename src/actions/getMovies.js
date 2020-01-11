import {GET_FILMS} from "../actions-types/actions-types";

export function movieFetchDataSuccesss(data) {
    return {
        type: GET_FILMS,
        data
    }
}

export function movieFetchData(url) {

    const getfilms = 'https://api.themoviedb.org/ '
    return (dispatch) => {
        fetch(`${getfilms} / ${url}`, {
            headers: {
                Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODJlN2Q1M2M3MTQ3OTFmZjczZmU4NzA3ODdmMDgxNSIsInN1YiI6IjU3ZWE0NjY0OTI1MTQxMTA4OTAwOGZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lEEivZliSc_G_UGJbP8p1LRlPXWu3U9erTCsUnRWP_U'
            }
        })
            .then(data => data.json())
            .then(json => {
                this.setState({data: json.results})
            })
            .then(data => dispatch(movieFetchDataSuccesss(data)))
            .catch(() => {
            });
    }

}
import axios from "axios";

class ApiAdapterGenres {
    constructor() {
        this.baseUrlPic = 'https://api.themoviedb.org/';

    }

    getPic(endpoint) {
        return axios.get(`${this.baseUrlPic}/${endpoint}`, {
            headers: {
                Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODJlN2Q1M2M3MTQ3OTFmZjczZmU4NzA3ODdmMDgxNSIsInN1YiI6IjU3ZWE0NjY0OTI1MTQxMTA4OTAwOGZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lEEivZliSc_G_UGJbP8p1LRlPXWu3U9erTCsUnRWP_U'
            }
        })
    }
}

export const AdapterGenres = new ApiAdapterGenres();
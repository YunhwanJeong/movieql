import axios from 'axios';

let MOVIE_API_URL = 'https://yts-proxy.now.sh/';

const getMovies = async (limit) => {
    let MOVIES_DETAIL_NAMESPACE = `list_movies.json?sort_by=rating`;
    MOVIE_API_URL += MOVIES_DETAIL_NAMESPACE;
    if (limit) {
        MOVIE_API_URL += `&limit=${limit}`
    }
    const {
        data: {
            data: {
                movies
            }
        }
    } = await axios.get(MOVIE_API_URL);
    return movies.map((movie) => {
        return {
            id: movie.id,
            title: movie.title,
            year: movie.year,
            genres: movie.genres,
            rating: movie.rating,
            poster: movie.medium_cover_image,
            summary: movie.summary,
        };
    });
};

const getMovie = async (id) => {
    let MOVIE_DETAIL_NAMESPACE = `movie_details.json`;
    MOVIE_API_URL += MOVIE_DETAIL_NAMESPACE;
    if (id) {
        MOVIE_API_URL += `?movie_id=${id}`;
    }
    const {
        data: {
            data: {
                movie
            }
        }
    } = await axios.get(MOVIE_API_URL);
    return {
        id: movie.id,
        title: movie.title,
        year: movie.year,
        genres: movie.genres,
        rating: movie.rating,
        poster: movie.medium_cover_image,
        summary: movie.summary,
    }
};

export { getMovies, getMovie };
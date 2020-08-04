import axios from 'axios';
import { MOVIE_API_URL, MOVIES_DETAIL_NAMESPACE, MOVIE_DETAIL_NAMESPACE, MOVIE_SUGGESTIONS_NAMESPACE } from './constants';

const getMovies = async (limit) => {
    let getMoviesURL = MOVIE_API_URL + MOVIES_DETAIL_NAMESPACE
    if (limit) {
        getMoviesURL += `&limit=${limit}`;
    }
    const {
        data: {
            data: {
                movies
            }
        }
    } = await axios.get(getMoviesURL);
    return movies.map((movie) => {
        return {
            id: movie.id,
            title: movie.title,
            year: movie.year,
            genres: movie.genres,
            rating: movie.rating,
            poster: movie.medium_cover_image,
            description: movie.description_full,
        };
    });
};

const getMovie = async (id) => {
    let getMovieURL = MOVIE_API_URL + MOVIE_DETAIL_NAMESPACE;
    if (id) {
        getMovieURL += `?movie_id=${id}`;
    }
    const {
        data: {
            data: {
                movie
            }
        }
    } = await axios.get(getMovieURL);
    return {
        id: movie.id,
        title: movie.title,
        year: movie.year,
        genres: movie.genres,
        rating: movie.rating,
        poster: movie.medium_cover_image,
        description: movie.description_full,
    }
};

const getSuggestions = async (id) => {
    let getSuggestionsURL = MOVIE_API_URL + MOVIE_SUGGESTIONS_NAMESPACE;
    if (id) {
        getSuggestionsURL += `?movie_id=${id}`;
    }
    const {
        data: {
            data: {
                movies
            }
        }
    } = await axios.get(getSuggestionsURL);
    return movies.map((movie) => {
        return {
            id: movie.id,
            title: movie.title,
            year: movie.year,
            genres: movie.genres,
            rating: movie.rating,
            poster: movie.medium_cover_image,
            description: movie.description_full,
        }
    });
};

export { getMovies, getMovie, getSuggestions };
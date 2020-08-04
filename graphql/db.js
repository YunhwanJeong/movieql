import axios from 'axios';

const getMovies = async (limit) => {
    let MOVIE_API_URL = `https://yts-proxy.now.sh/list_movies.json?sort_by=rating`;
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

export { getMovies };
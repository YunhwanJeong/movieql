import { getMovies, getMovie } from './db';

const resolvers = {
    Query: {
        movies: (_, { limit }) => getMovies(limit),
        movie: (_, { id }) => getMovie(id),
    },
};

export default resolvers;
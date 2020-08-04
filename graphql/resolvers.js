import { people, getPerson, addPerson, deletePerson } from './db';

const resolvers = {
    Query: {
        people: () => people,
        person: (_, { id }) => getPerson(id),
    },
    Mutation: {
        addPerson: (_, args) => addPerson(args),
        deletePerson: (_, { id }) => deletePerson(id),
    }
};

export default resolvers;
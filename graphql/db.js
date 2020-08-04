const people = [
    {
        id: 1,
        name: '정윤환',
        age: 29,
        gender: '남성'
    },
    {
        id: 2,
        name: '오하람',
        age: 30,
        gender: '여성'
    },
    {
        id: 3,
        name: '오하은',
        age: 25,
        gender: '여성'
    },
    {
        id: 4,
        name: '오감자',
        age: 1,
        gender: '중성'
    },
    {
        id: 5,
        name: '유선자',
        age: 55,
        gender: '여성'
    },
];

const getPerson = (id) => {
    return people.find((person) => person.id === id);
};

const addPerson = ({ name, age, gender }) => {
    const person = {
        id: people.length + 1,
        name,
        age,
        gender,
    };
    people.push(person);
    return person;
};

const deletePerson  = (id) => {
    const indexOfPersonToDelete = people.findIndex((person) => person.id === id);
    if (indexOfPersonToDelete !== -1) {
        people.splice(indexOfPersonToDelete, 1);
        return true;
    }
    return false;
};

export { people, getPerson, addPerson, deletePerson };

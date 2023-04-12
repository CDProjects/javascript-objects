const person = {
    name: 'Edward',
    city: 'New York',
    age: 37,
    isStudent: true,
    skills: ['JavaScript', 'HTML', 'CSS']
};

person.nickname = 'Duke';
const message = `Hi, I'm ${person.name}. I live in ${person.city}. Most know me as ${person.nickname}. Me age is ${person.age + 1}.`;
console.log(message);
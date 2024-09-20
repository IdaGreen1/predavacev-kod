export function MyName() {
    const person = {
        firstName: 'Ida',
        lastName: 'Bahun',
        age: 33,
        animal: {
            firstName: 'Ami',
            age: 2
        },

    };

    return <div>
        <p>My name is {person.firstName} {person.lastName}, I'm {person.age} years old!</p>
        <p>I love dogs. My dog name is {person.animal.firstName}, she is {person.animal.age} years old</p>
        </div>
};


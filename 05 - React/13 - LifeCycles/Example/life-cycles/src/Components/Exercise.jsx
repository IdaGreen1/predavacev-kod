import { Component } from "react";

export default class Exercise extends
    Component {
    state = {
        users: [
            { id: 1, name: 'Pepita', years: 20 },
            { id: 2, name: 'Jozefina', years: 29 },
            { id: 3, name: 'Marica', years: 24 },
        ]
    }

    render() {
        return (
            <div>
                <h1>Exercise</h1>
                <ul>
                    {this.state.users.map(user =>
                        <Users key={user.id} name={user.name} age={user.years}
                        />
                    )}
                </ul>
            </div>
        )
    }
};

function Users({ name, years }) {
    return (
        <div>
            <li>
                I am {name} and I'm {years} years old.
            </li>
        </div>
    )

}
import { useState } from 'react';


export default function NewUser() {

    const [firstName, setFirstName] = useState('Ime');
    const [age, setAge] = useState('Godine');

    const changeFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const changeAge = (e) => {
        setAge(e.target.value);
    }


    const handleNewUser = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h3>Ovdje možete stvoriti novog korisnika</h3>
            <form onSubmit={handleNewUser}>
            <label>
                <input type='text' value={firstName} onChange={changeFirstName} />
            </label>

            <label>
                <input type='text' value={age} onChange={changeAge} />
            </label>
                <button type="submit">Dodaj novog korisnika</button>
            </form>
            <p>
                Pozdrav, moje ime je {firstName} i imam {age} godina.
            </p>
           

        </div>
    )
}
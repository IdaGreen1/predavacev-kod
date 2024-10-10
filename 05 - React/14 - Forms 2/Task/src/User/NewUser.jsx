import { useState } from 'react';


export default function NewUser({ onAddUser }) {
    const [name, setName] = useState('');
    const [years, setYears] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();

        if (name && years) {
            onAddUser(name, years);
            setName('');
            setYears('');
        } else {
            alert('Please fill in both fields');
        }
    };

    const handleYearsChange = (event) => {
        const value = event.target.value;

        if (/^\d*$/.test(value)) {

            setYears(value);
        }
    };

    return (
        
            
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={name}
                placeholder='Enter Name'
                onChange={(event) => setName(event.target.value)}
            />
            <input type='text'
                value={years}
                placeholder='Enter Age'
                onChange={handleYearsChange}
            />
            <button type="submit">Add new User</button>
        </form>
    );
}
import { useState } from "react";

export default function FunctionalExample() {
     const [value, setValue] = useState('Placeholder');
     const [data, setData] = useState('');
     const changeValue = (e) => {
        setValue(e.target.value);
     };

     const handleSubmit = (e) => {
        e.preventDefault();
        const fetchData = async (e) => {

            try {
                const response = await fetch(`https://api.github.com/users/`, options)
    
                const result = await response.json();
    
                setData(result);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
     }
    return(
        <div>
            <h1>FunctionalExample</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' value={value} onChange={changeValue} />
                <button type="submit">Submit Data</button>
            </form>
        </div>
    );
}
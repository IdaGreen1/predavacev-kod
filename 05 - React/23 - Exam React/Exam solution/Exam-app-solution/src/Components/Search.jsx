import { useState } from "react";
import { options } from "../Helpers/Utils";

export default function Search() {
    const [value, setValue] = useState('Enter GitHub username');
    const [data, setData] = useState('');
    const [error, setError] = useState(null);
    const [secondData, setSecondData] = useState('');

    const changeValue = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const fetchData = async (e) => {

            try {
                const response = await fetch(`https://api.github.com/users/${value}`, options)

                const result = await response.json();

                setData(result);
            } catch (error) {
                setError(error);
            }
        };

        const secondFetchData = async (e) => {
            try {
                const response = await fetch(`https://api.github.com/users/${value}/repos`, options)

                const result = await response.json();

                setSecondData(result);

            } catch (error) {
                setError(error);
            }
        }

        fetchData();
        secondFetchData();
    }

    console.log(data)
    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <input type='text' value={value} onChange={changeValue} />
                <button type="submit">Search</button>
            </form>

            <div>
                <h1>{data.name}</h1>
                <h5>{data.type}</h5>
                <h5>{data.location}</h5>
                <p>{data.blog}</p>
                <p>{data.created_at}</p>
                <img src={data.avatar_url} alt='avatar' />{data.avatar_url}

            </div>

            <div>
                <p>{secondData.map(repo => (repo.name))}</p>
            </div>
        </div>
    );
}
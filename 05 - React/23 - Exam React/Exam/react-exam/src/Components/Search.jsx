import { useState } from "react";
import { options } from "../Helpers/Utils";

export default function Search() {

    const [data, setData] = useState('');
    const [error, setError] = ('');


    const fetchData = async (e) => {

        try {
            const response = await fetch(`https://api.github.com/users/`, options)

            const result = await response.json();

            setData(result);
        } catch (error) {
            setError(error);
        }
    };

   

    console.log(data)
    return (
        <div>

        </div>
    )
}
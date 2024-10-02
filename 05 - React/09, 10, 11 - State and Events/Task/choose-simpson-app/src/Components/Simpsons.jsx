import { useState } from 'react';
import HandleState from './HandleState';

export default function Simpsons() {

    const [name, setName] = useState('Lisa');
    const [bestFriend, setBestFriend] = useState('Janney Powel');
    const [lovingSchool, setLovingSchool] = useState(true);
    const [imgUrl, setImgUrl] = useState('https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png')

    function handelclick() {

    }
    return (

        <div>
            <form>
                <input type="radio" name="Lisa" />
                <input type="radio" name="Bart" />
                <button ></button>
            </form>
        </div>
    )


    return (
        <div>

            <h1>Who do you love more?</h1>
            <div>
                <HandleState />
            </div>
        </div>
    )
}


import { useState } from "react";

export default function Hooks() {
    //Declared a new variable called count
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(27);
    const [fruit, setFruit] = useState('apple');

    return (
        <div>
            <h1>Hook Example</h1>
            <p>You clicked {count} times.</p>
            <button onClick={ () => setCount(count + 1)}>Incease count</button>
            <hr/>

            <p>The user John is {age} years old.</p>
            <button on onClick={() => setAge(30)}>Increase John's age.</button>
            <hr/>

            <p>John favorite fruit is {fruit}.</p>
            <button on onClick={() => setFruit('banana')}>Change John's favorite fruit.</button>
       </div>
    );
}

//buton set smo stavili u anonimnu samopozivajuću funkciju da izbjegnemo infinite loop 
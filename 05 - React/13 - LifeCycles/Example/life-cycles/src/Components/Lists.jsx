export default function Lists() {
    const numbers = [1, 2, 4, 6, 8];

    const listItems = numbers.map((number) => 
    <li key={crypto.randomUUID}>  
         {number} 
    </li>
    );
//If we dont't have id number we use crypto.randomUUID

    return (
    <div>
        <h1>Hello, lists</h1>
        <ul>{listItems}</ul>
    </div>
    )
}
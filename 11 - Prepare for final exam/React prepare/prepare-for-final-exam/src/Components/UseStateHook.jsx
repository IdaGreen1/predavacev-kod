import { useState } from "react";

export default function UseStateHook() {
    const [count, setCount] = useState(0);

    var changeCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <p>You clicked {count} times.</p>
            <button onClick={changeCount}>Change Count</button>
        </div>
    );
}
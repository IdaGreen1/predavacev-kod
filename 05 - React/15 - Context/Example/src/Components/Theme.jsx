import { useState } from "react"
import FunctionalContext from "./FunctionalContext";
import { createContext, useContext } from "react";

export const ThemeContext = createContext();

export default function Theme() {
    const [darkTheme, setDarkTheme] = useState(true);

    function toogleTheme() {
        setDarkTheme(!darkTheme);
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <button onClick={toogleTheme}>Toggle Theme</button>
            <FunctionalContext />
        </ThemeContext.Provider>
    );
}


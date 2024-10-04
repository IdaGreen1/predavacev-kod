import { useState } from "react"; 

export default function CounterApp() {

    const [counter, setCounter] = useState(0);
 
    const handleClick1 = () => {
        setCounter(counter + 1);
    };
 
    
    const handleClick2 = () => {
        setCounter(counter - 1);
    };
 
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              
                fontSize: "200%",
            
                width: "100%",
                height: "100%",
               
            }}
        >
            Counter App
            <div
                style={{
                    fontSize: "120%",
                
                    top: "10vh",
                }}
            >
                {counter}
            </div>
            <div className="buttons">
                <button
                    style={{
                        fontSize: "60%",
                      
                        top: "20vh",
                        marginRight: "5px",
                        backgroundColor: "aliceblue",
                        borderRadius: "8%",
                        color: "black",
                    }}
                    onClick={handleClick1}
                >
                    +
                </button>
                <button
                    style={{
                        fontSize: "60%",
                
                        top: "20vh",
                        marginLeft: "5px",
                        backgroundColor: "aliceblue",
                        borderRadius: "8%",
                        color: "black",
                    }}
                    onClick={handleClick2}
                >
                    -
                </button>
            </div>
        </div>
    );
};
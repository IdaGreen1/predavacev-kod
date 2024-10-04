import { useState } from "react";

export default function ColorPicker() {
    const [color, setColor] = useState('#e6e6fa');

    return (
        <div >
            <h1>Color Picker</h1>
            <div style={{
                width: '100px',
                height: '50px',
                backgroundColor: color,
                margin: '15px'
            }} >

            </div>
            <input name='color-changer' 
                   type="color" 
                   value={color} onChange={(e) => setColor(e.target.value)} 
                   style ={{margin: '35px'}}
                   />
            <p style= {{margin: '25px'}} >{color}</p>
        </div>
    )
} 
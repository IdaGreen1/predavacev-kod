import { useState } from "react"

export default function FormTask() {
    
    const [value, setValue] = useState('');
    

    const changeValue = (e) => {
        setValue(e.target.value);
     };

     const handleSubmit = (e) => {
       e.preventDefault();

       alert(`Poslano je ime ${value}`);
       setValue('')
     };

     
    return(
        <div>
            <h1>FormTask</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Ime:
                <input type='text'value={value} onChange={changeValue} />
                </label>
               <input type="submit" value="Potvrdi"/>
            </form>
            
        </div>
    );
}

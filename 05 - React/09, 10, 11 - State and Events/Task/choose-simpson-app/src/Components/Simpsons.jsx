import { useState } from 'react';


export default function Simpsons() {

    const [firstName, setFirstName] = useState('Lisa');
    const [bestFriend, setBestFriend] = useState('Janney Powel');
    const [lovingSchool, setLovingSchool] = useState(true);
    const [imgUrl, setImgUrl] = useState('https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png')

    const changeState = () => {
        setFirstName('Bart');
        setBestFriend('Milhouse Van Houte');
        setLovingSchool(false);
        setImgUrl('https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png');
    }

function handleSubmit(e) {
    e.preventDefault()
    alert('Form was submittet');
}


    return (
        <div>
            <h1>Who do you love more?</h1>
        
            <input type="radio" name="Lisa" />
            <label>Lisa Simpson</label>
            <input type="radio" name="Bart" />
            <label>Bart Simpson</label>
         
           
           <form onSubmit={handleSubmit}>
               <button type='submit'>Submit</button>
           </form>
       </div> 
   )

    }
    


 


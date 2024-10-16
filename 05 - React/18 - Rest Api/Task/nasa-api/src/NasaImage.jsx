import { useState, useEffect } from "react";

export default function NasaImage() {

   
  const [img, setImg] = useState([]);
  
  useEffect(() => {

     fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
     .then((response) => response.json())
     .then((data) => {
        console.log(data);
        setImg(data);
     })
     .catch((err) => {
        console.log(err.message);
     });
  }, []);

    return(
        <div>
            
            <img src=''alt=""/>
        </div>
    )
}
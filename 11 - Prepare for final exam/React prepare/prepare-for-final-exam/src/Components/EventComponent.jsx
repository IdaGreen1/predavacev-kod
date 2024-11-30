export default function EventComponent() {
    const handleButtonClick = (event) => {
        console.log('buttonClick!');
    };
   
    return (
        <div>
            <button onClick={handleButtonClick}>
                Klikni me!
            </button>
     </div>
 )
}
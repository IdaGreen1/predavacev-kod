export default function Animals() {
    
    const myAnimals = [
       { cat:'Cat', id:1 },
       { cow:'Cow', id:2 },
       { mouse:'Mouse', id:3 },
       { horse:'Horse', id:4 }
    ]
    
} 

    function myButton() {
        const question = prompt('Wich new animal you want to add?');
        if (question != null) {

        } 
    }


 return(
    <div>
            <input type="text" onClick={this.question}></input>
            <button>New Animal</button>
    </div>
 )
}
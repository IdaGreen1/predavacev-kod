// Function without return
function greet(name) {
    console.log('Hello ' + name);
}
greet('Alice');


function add(a, b) {
    return a + b; //body of the funtion
}

//Invoking the fuction
console.log(add(3, 4));
console.log(add(5, 36));

function dynamicGreet(name) {
    console.log(`Helo, ${name}. How are you today?`);
}

//Comenting out as prompt is not defined currently
// var student = prompt('Enter a name: ');
// dynamicGreet(student);


// Self-invoking function

(function greet(){
    console.log("Heloo, I have invoked myself!")
})();

//primjer (run this in browser)

//    (function calculateBMI(){
//      var result;

 //     var person = prompt(`Please eneter your name: `);
 //     var weight = prompt(`What is your weight, ${person}? `);
 //     var height = prompt(`And lastly, what is your height, ${person}? `);

 //     result = weight / (height * 2);

//      alert(`${person} your BMI score is ${result.toFixed(2)}`);
//      })();




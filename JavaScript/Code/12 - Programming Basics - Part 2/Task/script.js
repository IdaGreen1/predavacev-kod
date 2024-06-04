//1
function temperatureConvert(fahrenheit) {
     var celsius = 5/9 * (fahrenheit - 32);

     return celsius.toFixed(2);
}
console.log(temperatureConvert(130))

//2
function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum +arguments[i];
    }
    return sum;
}

console.log(add(1, 2, 3, 4, 5, 6));

//3
function calculateBMI() {
    let result;
    let person = prompt('Please enter your name:');

}
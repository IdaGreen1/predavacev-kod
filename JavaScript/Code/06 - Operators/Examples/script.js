var a = 6;
var b = '5';

console.log(typeof a); // number

//Arithmetic
console.log (a + b); //65
console.log (a + +b); //11
console.log (a - b); //1
console.log (a * b); //30
console.log ((a * 7.4).toFixed(2)); //44.40 Fiksirali smo na dvije decimale
console.log ( a / b); // 1.2
console,log (a / 0); // Infinity
console.log (typeof (a / 0)); //bez typeOfa dobili bi odgovor infiniti 
console.log ( a / Infinity); //0
console.log (a % 6);

//COMPARISION
console.log (a == b); //Equal operator /false
console.log (a === b); // Strict Equal /false
console.log ('' == 0); // Falsy values

//logical
console.log (5 < 6 && 6 == 6); //true
console.log (5 < 6 || 6 == 6); //true
console.log (!(5 < 6)); //false


//CONDITIONAL (TERENARY)
console.log ( 1 == 1 ? 'This is equal' : 'This is not equal');
console.log (1 === '1' ? 'This is equal' : 'This is not equal');
var greet = "Hello, my name is ";
var firstName = "Nino";

var user = greet + firstName;
console.log(user);

console.log("I have 27 " + "years");
console.log("I have" + " " + "'3' dogs");

console.log("I live in Zagreb, the capital of \nRepublic of Croatia.");

// Length
var str = "Life, the universe and everything.";
console.log(str.length);

// CharAt - counting starts from 0, spaces are included
var sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.charAt(6));

// Trim - Mora biti pozvana sa zagradama
var greeting = "   Heloo World!";
console.log(greeting.trim());

// indexOf
var paragraph = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
var searchTerm = "dog";
var indexOfFirst = paragraph.indexOf(searchTerm);
console.log("Search term is found at " + indexOfFirst)

var secondTerm = paragraph.indexOf(searchTerm, indexOfFirst + 1);
console.log("2nd search term is found at " + secondTerm)
//52 - where the 2nd dog is found

// toUpperCase & toLowerCase;
var sentence2 = "The quick brown FOX jumps over the lazy dog.";
console.log(sentence2.toUpperCase());
console.log(sentence2.toLowerCase());





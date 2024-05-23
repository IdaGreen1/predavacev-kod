var words = ['hello', 'world', 'welcome']; //literal

var array2 = new Array('eat', 'sleep');

//empty array
var emptyArray = [];

//array of numbers
var numberArray = [2, 4, 6, 8, 10];

//array of strings
var stringArray = ['eat', 'work', 'sleep'];

//array with mixed data type
var mixedArray = ['work', 'excercise', 1, true, false];

/*
* Acess element of an array
*/

var myArray = ['h', 'e', 'l', 'l', 'o'];

console.log(myArray[0]);
console.log(myArray[1]);

// Pushing items to array
var dailyActivities = ['eat', 'sleep'];

dailyActivities.push('exercise');
console.log(dailyActivities);

//Adds an element to array at the begining of the array
dailyActivities.unshift('wake up');
console.log(dailyActivities);

//Remove the last element of an array
dailyActivities.pop();
console.log(dailyActivities);

//If we want to check wich element was removed
var removedElement = dailyActivities.pop();
console.log(removedElement);
console.log(dailyActivities);

//get the lenght of an array
console.log(dailyActivities.length);

//For Loop
var students = ['John', 'Jane', 'Mike', 'Daniel', 'Sophie'];
var activeStudents = [];

for(var i = 0;  i < students.length; i++){
   // console.log(student[i]); umjesto njega
   activeStudents.push(students[i]);
}

console.log(activeStudents);











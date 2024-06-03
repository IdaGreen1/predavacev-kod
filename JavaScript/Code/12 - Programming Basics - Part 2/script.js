//1
function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
    }
}
console.log(calculate(5, 3, '+'));
console.log(calculate(5, 3, '*'));
console.log(calculate(15, 3, '/'));
console.log(calculate(100, 50, '-'));

//2
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('Moj pas se zove Ami'));

//3
function filterArray(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
console.log(filterArray([1, 2, 3, 4, 5, 6]));

//4
function formatName(person) {
    return person.lastName + '' + person.firstName;
}
var person = {
    firstName: 'John',
    lastName: 'Doe'
}
console.log(formatName(person));

//5
function addObjectProperty(obj, key, value) {
    obj[key] = value;
    return obj;
}
const obj = { a: 1, b: 2 };
console.log(addObjectProperty(obj, 'c', 3));

//6
function findMax(numbers) {
    return Math.max(...numbers);
}
console.log(findMax([1, 2, 3, 4, 5, 6]));
console.log(findMax([-1, -2, -3, -4, -5]));

//7
function countVowels(str) {
    const vowels = 'AEIOUaeiou';
    let count = 0;

    for (let charachter of str) {
        if (vowels.includes(charachter)) {
            count++;
        } else {
            continue;
        }
    }
    return count;
}
console.log(countVowels('hello world'));
console.log(countVowels('JavaScript is fun'));

//8
function createUser(firstName, lastName, age) {
    const user = {
        firstName: firstName,
        lastName: lastName,
        age: age,
}
    return user;
}

console.log(createUser('John', 'Doe', 25));
console.log(createUser('Jane', 'Smith', 30));

//9
function removeDuplicates(array) {
    return [...new Set(array)]; 
}
console.log(removeDuplicates([1, 2, 3, 4, 4, 5]));
console.log(removeDuplicates(['a', 'b', 'a', 'c', 'b']));

//10
function sumArrayValues(array) {
     let sum = 0;

    for (let j = 0; j < array.length; j++) {
        sum += array[j];
    }
    return sum;
        
}

console.log(sumArrayValues([1, 2, 3, 4, 5,]));

//11
function findLongestWord(str) {
    //split the string into array of words
    const words = str.split(' ');
    //initilaze a variable to keep track of longest word
    let longestWord = '';

    // itterate trough the array of words
    for (let word of words) {
        //if current word is longer than the longest word
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    } 
    return longestWord;
}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog"));
console.log(findLongestWord("JavaScript is awesome")); 



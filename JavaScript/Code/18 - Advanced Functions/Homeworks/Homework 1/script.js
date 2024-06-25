function filterArray(arrOfNumbers, isEven) {
    return arrOfNumbers.filter(isEven);
}

function isEven(num) {
    return num % 2 === 0;
}

const arrOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = filterArray(arrOfNumbers, isEven);

console.log(evenNumbers);
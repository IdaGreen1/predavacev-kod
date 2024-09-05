function algebra(word) {
    return word.split('').sort().join('');
}

let result = algebra('developer');
console.log(result);
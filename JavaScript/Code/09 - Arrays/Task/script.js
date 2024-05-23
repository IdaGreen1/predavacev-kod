var names = ['John', 'Jane', 'Bob', , 'Mike'];

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

names.push('Ida');

for (var j = 0; j < names.length; j++) {
    console.log(names[j]);
    if (names[j] == "Jane") {
        break;
    }
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Array.of(2, 4, 6, 8, 10));



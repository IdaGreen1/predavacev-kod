const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var sum = 0;
var count = 0;
for (var i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) {
        sum += numbers[i];
        count++;
    }
}

if (count > 0) {
    var average = sum / count;
    console.log('The average of even numbers in this array is: ' + average);
} else {
    console.log('There is no even numbers!');
}


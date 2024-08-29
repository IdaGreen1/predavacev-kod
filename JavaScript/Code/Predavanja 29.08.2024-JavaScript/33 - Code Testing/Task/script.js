function findMax(numbers) {
    if (!numbers) {
        return undefined;
    }
    var i;
    var max = -Infinity;
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

module.exports = findMax;

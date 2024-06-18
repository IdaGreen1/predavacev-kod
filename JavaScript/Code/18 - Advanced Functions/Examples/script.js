// Advanced Functions

function outerFunction(outerVariable) {
    var outer2 = 'Hi';
    return function innerFunction(innerVariable) {
        console.log('Outer Variable' + outerVariable);
        console.log('Inner Variable' + innerVariable);
        console.log(outer2);
    }
}

outerFunction('1st brackets')('2nd brackets');


var newFunction = outerFunction('Outer');
newFunction('Inner');



var age = 25;

if(age > 18) {
    console.log('User is not of legal drinking age');
} else {
    console.log('User is NOT of legal drinking age');
}

// If, Ese if, Else

var gender = 'Male';
if(gender == 'Male') {
    console.log('User is a Male');
} else if (gender == 'Female') {
    console.log('User is a female');
} else {
    console.log('User gender unknown');
}

// If, Else with range

var customerAge = 17;
if(customerAge >= 18 && customerAge <=Infinity) {
    console.log('User is of legal drinking age');
} else {
    console.log( 
        'Warning: This useris not of legal drinking age.');
}

//SWITCH (koristimo umjesto if else ako imamo više od tri casea)

var fruit = 'Mangoes';

switch (fruit) {
    case 'Oranges':
        console.log('User has bought oranges.');
        break;

    case 'Mangoes' :
        console.log('User has bought mangoes.');
        break;

    case 'Papayas':
        console.log('User has bought papayas.');
        break;

    default:
        cosole.log('Ihave no idea what the user has bought.');
        break;
}

//startin value is zero is zero witch represents sunday. Monday is 1
console.log(new Date().getDay());

var date = new Date().getDay();

switch (date) {
    case 0:
        console.log('Today is Sunday');
        break;
    case 1:
        console.log('Today is Monday');
        break;

    case 2:
        console.log('Today is Tuesday');
        break;

    case 3:
        console.log('Today is Wednesday');
        break;

    case 4:
        console.log('Today is Thuersday');
        break;

    case 5:
        console.log('Today is Friday');
        break;

    case 6:
        console.log('Today is Saturday');
        break;

    
}
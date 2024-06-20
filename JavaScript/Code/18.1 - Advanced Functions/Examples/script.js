//Deafault binding je na globalni objekt, u našem slučaju window. Ako ako this.nešto ne postoji imenovano u funkciji, onda se this.nešto odnosi na window.nešto.

/**************************************************
 * BIND NAMINGS
 **************************************************/

function multipy(x,y) {
    console.log({x, y});
    return `${this.name} have ${(x, y)} points.`;
}

var person2 = {
    name: 'Harry',
};

var person3 = {
    name: 'Ron',
};

var two = multipy.bind(person2);
console.log(two(3, 5));

var three = multipy.bind(peron3);
console.log(three(10, 6));

/**************************************************
 * BIND NAMINGS
 **************************************************/

var person4 = {
    name: 'Harry',
};

var person5 = {
    name: 'Ron',
};

function greet ( greeting, other ) {
    console.log(`${greeting}, ${this.name}`);
    console.log(`${other}, ${this.name}`);
}

greet.call(peron4, 'Hello', 'Hi');  //Prvo prosljeđujemo this.name, a onda greeting


/**************************************************
 * Apply
 **************************************************/

greet.apply(person4, ['Hello', 'Hi']);  //Prima argumente u obliku arraya

/**************************************************
 * Example
 **************************************************/


function pozdravi(ime) {
    console.log(`Pozdrav, ${ime}, moje ime je ${this.name}`);
}

var osoba = {
    ime: 'John',
};

pozdravi.apply(osoba, ['Allice']);
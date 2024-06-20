function zbrajanje(...brojevi){ 
let rezultat = 0;
let broj; //lokalna varijabla
for (broj of brojevi) {
    rezultat = rezultat + broj;
}
return rezultat;
}

console.log(zbrajanje(1, 2, 3, 4, 5)); // 15

//Prikkupljanje preostalih elemenata u nizu
const [prvi, drugi, ...ostali] = [1, 2, 3, 4, 5];
console.log(prvi); // ispisuje 1
console.log(drugi); // ispisuje 2
console.log(ostali); // ispisuje 3, 4, 5

//Destrujturiranje objekata
const person = {
firstName: 'John',
age: 30,
country: 'USA',
};

const { firstName, ...rest } = person;
console.log(firstName);
console.log(rest);
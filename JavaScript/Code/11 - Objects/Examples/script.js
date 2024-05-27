var person = {
    firstName: 'Ida',
    lastName: 'Bahun',
    id: 12345,
    fullName: function () {
        return this.firstName + '' + this.lastName;
    }
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);

//Creating an objest by using the new kwyword (new object method)

var myCar = new Object();
console.log(myCar);

myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar);


var phone = {
    brand: {
        manufacturer: 'Apple',
        model: 'iphone 13 Pro',
    },
    color: ['Siera Blue', 'Silver', 'Gold', 'White'],
    price: 999,
    display: '6.1-inch display',
    qty: 184,
    checkStock: function () {
        if (this.qty > 0) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(phone.brand.model);
console.log(phone.checkStock);
console.log(
    `The phone you have selected ${phone.brand.model} is 
        ${phone.checkStock() == 'in stock'
        ? 'avalible for purchase.'
        : 'not available for purchase. Sorry'
    }`
);

//Converting ana object into JSON

var myphoneJSON = JSON.stringify(phone);
console.log(myphoneJSON);

var myJSON =`{"brand":{"manufacturer":"Apple","model":"iphone 14 Pro"},"color":["Siera Blue","Silver",
"Gold","White"],"price":1999,"display":"6.1-inch display","qty":100}`;

//Convering JSON INTO OBJECT

var myObject = JSON.parse(myJSON);
console.log(myObject);


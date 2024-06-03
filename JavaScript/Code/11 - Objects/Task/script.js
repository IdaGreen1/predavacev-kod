let car = {
    brand: {
        manufacturer: 'Toyota' ,
        model: 'Avensis',
        type: ['Wagon', 'Classic'],
        motor: ['D4D', 'VVT']
    },
    color: ['Black', 'Golden', 'silver'],
    make: 2013,
    numberOfDoors: 5,
    FamilySuinstability: function () {
           if (this.numberOfDoors > 4) {
            return true;
           } else {
            return false;
           }
    }
}

console.log(car.brand.manufacturer, car.brand.model,)
console.log(`${car.brand.manufacturer} ${car.brand.model}, is suitabile for families` )

var myCarJSON = JSON.stringify(car);
console.log(myCarJSON);
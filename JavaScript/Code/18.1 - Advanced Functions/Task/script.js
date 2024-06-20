var chef = {
    prepareDish(dishName) {
        console.log(`Chef is preparing ${dishName}!`);
    },
};

var waiter = {
    takeOrder(tableNumber, dishName) {
        console.log(`Table number ${tableNumber} ordered ${dishName} !`);
    },
    serveDish(tableNumber, dishName) {
        console.log(`Table number ${tableNumber} is served ${dishName}!`);
    },
};

function placeOrder(dishName, tableNumber, chef) {
    waiter.takeOrder.call(waiter, tableNumber, dishName);
    chef.prepareDish.call(chef, dishName);
    waiter.serveDish.call(waiter,tableNumber, dishName);
}

// Create the partially applied function orderSteak using bind

// Test the functionality
placeOrder('Pasta', 1,  chef);
// Use the partially applied orderSteak function

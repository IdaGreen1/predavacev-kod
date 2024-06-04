window.onload = function () {
    console.log('Page fully loaded');
};
//Dohvaćanje elementa pomoću Id-a
var main = document.getElementById('main');
console.log(main);

//kreiranje novog elementa
var newDiv = document.createElement('div');
console.log(newDiv);
//ubacivanje u dokument novog elementa
main.appendChild(newDiv)


var parent = main.parentNode; //body
// parent.removeChild(main); //Bodiju uklanjamo main

//KRAĆE BI BILO main.parentNode.removeChild(main);





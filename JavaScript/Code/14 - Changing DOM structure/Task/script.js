//1
var h1 = document.createElement('h1');
h1.innerText = 'Hello World!';
document.body.prepend(h1);

var div = document.createElement('div');
div.className = 'info';
div.innerText = 'Hello, World';
document.getElementById('footer').prepend(div); 


var count = 0;
for (var i = 0; i <= 1; i++) {
    var li = document.createElement('li');
    document.querySelector('ul').appendChild(li); 
}




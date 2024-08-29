
let libraryInfo = document.getElementById("libraryInfo");
let greeting = document.createElement("p");
let info = document.createElement("p");

libraryInfo.appendChild(greeting);

greeting.innerHTML = ("Welcome to City Central Library! <br> <br> We currently have 2 books in our collection.");

let bookList = document.getElementById("bookList");
let book1 = document.createElement("ul");

bookList.appendChild(book1);

book1.innerHTML = "<h3>Balada pjevica i zmija</h3><p>Author: Suzanne Collins</p><p>Genre: Roman</p><p>Avaliable: Yes</p>"

let title = document.querySelector('#bookName');
let author = document.querySelector('#author');
let type = document.querySelectorAll('#fiction').value;

console.log("type", type);

// Book constructor function
function Book(title, author, type) {
    this.title = title;
    this.author = author;
    this.type = type;
}

// Display Constructor
function Display(){
    
}


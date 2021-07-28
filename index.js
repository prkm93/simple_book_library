const title = document.querySelector('#bookName');
const author = document.querySelector('#author');
const fiction = document.querySelector('#fiction');
const programming = document.querySelector('#programming');
const cooking = document.querySelector('#cooking');
const libraryForm = document.getElementById('libraryForm');

// Book constructor function
function Book(title, author, type) {
    this.title = title;
    this.author = author;
    this.type = type;
}

// Display Constructor
function Display(book){
    console.log(book);
    
}

// Add methods to display prototype


// Add submit event listener

libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();
    let type = "";

    // console.log("fiction", fiction.checked);
    // console.log("programming", programming.checked);
    // console.log("cooking", cooking.checked);
    if (fiction.checked) {
        type = fiction.value;
    } else if (programming.checked) {
        type = programming.value;
    } else if (cooking.checked) {
        type = cooking.value;
    }
    
    let book = new Book(title.value, author.value, fiction.value);
    Display(book);
}
const title = document.querySelector('#bookName');
const author = document.querySelector('#author');
const fiction = document.querySelector('#fiction');
const programming = document.querySelector('#programming');
const cooking = document.querySelector('#cooking');
const libraryForm = document.getElementById('libraryForm');
const tableBody = document.querySelector('#table-body');

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
Display.prototype.add = function(book) {
    let tr = `<tr>
                <th scope="row">-</th>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.type}</td>
              </tr>`;
    tableBody.innerHTML += tr;
} 


// Clear Display
Display.prototype.clear = function() {
    libraryForm.reset();
}

libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();
    let type = "";

    if (fiction.checked) {
        type = fiction.value;
    } else if (programming.checked) {
        type = programming.value;
    } else if (cooking.checked) {
        type = cooking.value;
    }
    
    let book = new Book(title.value, author.value, type);
    let display = new Display();
    display.add(book);
    display.clear();
}
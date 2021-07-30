const title = document.querySelector('#bookName');
const author = document.querySelector('#author');
const fiction = document.querySelector('#fiction');
const programming = document.querySelector('#programming');
const cooking = document.querySelector('#cooking');
const libraryForm = document.getElementById('libraryForm');
const tableBody = document.querySelector('#table-body');
const successMessage = document.querySelector('#message');
let id= 0;
// Book constructor function
function Book(title, author, type) {
    this.title = title;
    this.author = author;
    this.type = type;
}

// Display Constructor
function Display(){
}


Display.prototype.validate = function(book) {
    if(book.title.length < 2 || book.author < 2) {
        return false; 
    } else {
        return true;
    }
}

Display.prototype.show = function(type, message) {
    successMessage.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show mt-4" role="alert">
                                    <strong>Message: </strong> ${message}
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>`;
    setTimeout(() => {
        successMessage.innerHTML = '';
    }, 2000)
}

// Add methods to display prototype
Display.prototype.add = function() {
    let book = JSON.parse(localStorage.getItem('book'));
    id++;
    let tr = `<tr>
                <th scope="row">${id}</th>
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
    console.log("book", book);
    localStorage.setItem('book', JSON.stringify(book));
    if (display.validate(book)) {
        display.add();
        display.clear();
        display.show('success', 'Book added successfully');
    } else {
        display.show('danger', 'Please enter valid books');
    }   
}
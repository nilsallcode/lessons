class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    displayBook() {
        console.log("Title: " + this.title);
        console.log("Author: " + this.author);
        console.log("Published: " + this.year);
    }

    static displayBooks(books) {
        console.log("Here is your list of books: ");
        for (const book of books) {
            console.log("Title: " + book.title);
            console.log("Author: " + book.author);
            console.log("Published: " + book.year);
            console.log('-'.repeat(10));
        }
    }
}

let myBook = new Book("JavaScript", "Nils Garland", "2023");

const books = [
    myBook,
    new Book("HTML", "Rexx Larsson", "2019"),
];

// Static method on the class
Book.displayBooks(books);

// Method on the instance of a class
myBook.displayBook();
const { Contract } = require("klayr-sdk");
const AccessControl = require("./AccessControl");

async function main() {
    const AccessControlContract = await ethers.getContractFactory("AccessControl");
    const deployedAccessControl = await AccessControlContract.deploy();
    const accessControlContract = new Contract(deployedAccessControl.address);
    console.log(accessControlContract);
}
main();


///////////////////////////////////
///////// DEBUG FROM HERE//////////
//////////////////////////////////

class BooksRegistry {
    constructor () {
        this.books = {}; // mapping book IDs to details
    }

    // Register a book in the system
    async registerBook (bookId, title, author, isbn) {
        if (!this.books[bookId]) {
            this.books[bookId] = {title, author, isbn, status: "available"};
            return `Book ${title} by ${author} registered with ID: ${bookId}`;
        }
        return `Book with ID: ${bookId} already exists!!`;
    }

    // update book information
    async updateBool(bookId, title, author, isbn) {
        const book = this.books[bookId];
        // access control
        // const accessCheck = await access
        if (book) {
            book.title = title || book.title;
            book.author = author || book.author;
            book.isbn = isbn || book.usbn;
            return `Book with ID: ${bookId} updated successfully!`;
        }
        return `Book with ID: ${bookId} not found!`
    }

      // Get all books
      async getAllBooks() {
        return this.books;
    }

}

module.exports = BooksRegistry;
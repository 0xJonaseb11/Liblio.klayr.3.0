class BooksRegistry {
    constructor () {
        this.books = {}; // mapping bool IDs to details
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
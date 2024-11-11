class BookUtilization {
    constructor() {
        this.borrowedBooks = {}; // mapping book IDs to borrow status
    }

    // Handle borrow a book
    async borrowBook (bookId) {
        if (this.borrowedBooks[bookId] && this.borrowedBooks[bookId].status === 'borrowed') {
            return `Book with ID ${bookId} is already borrowed!`;
        }

        this.borrowedBooks[bookId] = {
            status: 'borrowed',
            borrowDate: new Date()
        };
        return `Book with ID: ${bookId} has been borrowed successfully!!`;
    }

    // return a book
    async returnBook (bookId) {
        const book = this.borrowedBooks[bookId];
        if (book && book.status === 'borrowed') {
            book.status = 'available';
            return `Book with ID: ${bookId} has been returned to the library!`;
        }
        return `Book with ID: ${bookId} has not been borrowed yet!`;
    }

    // List all borrowed books
    async listAllBorrowedBooks() {
        return Object.keys(this.borrowedBooks).filter(bookId => this.borrowedBooks[bookId].status === 'borrowed');
    }
}

module.exports = BookUtilization;
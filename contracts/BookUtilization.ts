type BookStatus = "borrowed" | "available";

interface BorrowedBook {
    status: BookStatus;
    borrowDate: Date;
}

class BookUtilization {
    private borrowedBooks: Record<number, BorrowedBook> = {};

    // Borrow a book
    async borrowBook(bookId: number): Promise<string> {
        const book = this.borrowedBooks[bookId];
        if (book && book.status === "borrowed") {
            return `Book with ID: ${bookId} is already borrowed!`;
        }

        this.borrowedBooks[bookId] = {
            status: "borrowed",
            borrowDate: new Date(),
        };
        return `Book with ID: ${bookId} has been borrowed successfully!`;
    }

    // Return a book
    async returnBook(bookId: number): Promise<string> {
        const book = this.borrowedBooks[bookId];
        if (book && book.status === "borrowed") {
            book.status = "available";
            return `Book with ID: ${bookId} has been returned to the library!`;
        }
        return `Book with ID: ${bookId} has not been borrowed yet!`;
    }

    // List all borrowed books
    async listAllBorrowedBooks(): Promise<number[]> {
        return Object.keys(this.borrowedBooks)
            .map(Number)
            .filter((bookId) => this.borrowedBooks[bookId].status === "borrowed");
    }
}

export default BookUtilization;

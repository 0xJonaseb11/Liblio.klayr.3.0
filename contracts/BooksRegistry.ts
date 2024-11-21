import { Contract } from "klayr-sdk";
import AccessControl from "./AccessControl";

async function main(): Promise<void> {
    const AccessControlContract = await ethers.getContractFactory("AccessControl");
    const deployedAccessControl = await AccessControlContract.deploy();
    const accessControlContract = new Contract(deployedAccessControl.address);
    console.log(accessControlContract);
}

main().catch((error) => {
    console.error("Error in main function:", error);
});

//////////////////////////////////////
/// Debugged and Refactored Code ///
//////////////////////////////////////

type BookStatus = "available" | "borrowed" | "missed";

interface BookDetails {
    title: string;
    author: string;
    isbn: string;
    status: BookStatus;
}

class BooksRegistry {
    private books: Record<number, BookDetails> = {};

    // Register a book in the system
    async registerBook(bookId: number, title: string, author: string, isbn: string): Promise<string> {
        if (!this.books[bookId]) {
            this.books[bookId] = { title, author, isbn, status: "available" };
            return `Book "${title}" by ${author} registered with ID: ${bookId}`;
        }
        return `Book with ID: ${bookId} already exists!`;
    }

    // Update book information
    async updateBook(bookId: number, title?: string, author?: string, isbn?: string): Promise<string> {
        const book = this.books[bookId];
        if (book) {
            book.title = title || book.title;
            book.author = author || book.author;
            book.isbn = isbn || book.isbn;
            return `Book with ID: ${bookId} updated successfully!`;
        }
        return `Book with ID: ${bookId} not found!`;
    }

    // Get all books
    async getAllBooks(): Promise<Record<number, BookDetails>> {
        return this.books;
    }
}

export default BooksRegistry;

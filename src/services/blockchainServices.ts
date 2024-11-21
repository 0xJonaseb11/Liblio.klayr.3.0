import { Contract } from 'klayr-sdk';
import { getApplication } from './app'; // Assuming this exports the initialized app

// Assuming contracts are already deployed
const deployedBooksRegistryContract = new Contract(getApplication(), 'BooksRegistry');
const deployedAccessControlContract = new Contract(getApplication(), 'AccessControl');

// Function to check user's role
export const checkRole = async (userId: string, role: string) => {
    try {
        const result = await deployedAccessControlContract.canAccess(userId, role);
        return result.includes('authorized');
    } catch (error) {
        console.error("Error checking role:", error);
        return false;
    }
};

// Function to get all books
export const getBooks = async () => {
    try {
        const books = await deployedBooksRegistryContract.getAllBooks();
        return books;
    } catch (error) {
        console.error("Error fetching books:", error);
        return [];
    }
};

// Function to get the status of a book (borrowed, available, missed)
export const getBookStatus = async (bookId: string) => {
    try {
        const status = await deployedBooksRegistryContract.getBookStatus(bookId);
        return status;
    } catch (error) {
        console.error("Error fetching book status:", error);
        return 'Error fetching status';
    }
};

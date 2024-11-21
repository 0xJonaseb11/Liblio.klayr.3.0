/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// /services/blockchainServices.ts

import { KlayrClient } from 'klayr/sdk';

const KLAYR_HOST = '127.0.0.1';
const KLAYR_PORT = 7887;
const CHAIN_ID = '22049999';

const klayrClient = new KlayrClient({
    network: `http://${KLAYR_HOST}:${KLAYR_PORT}`,
    chainId: CHAIN_ID,
});

// Fetch status of books
export const fetchBookStatus = async () => {
    try {
        const response = await klayrClient.chain.callContractMethod('LibraryModel', 'getBookStatus', {});
        return response.result; // Assumes the response has { borrowed, available, missed }
    } catch (error) {
        console.error('Error fetching book status:', error);
        return { borrowed: 0, available: 0, missed: 0 };
    }
};

// Fetch all books
export const fetchBooks = async () => {
    try {
        const response = await klayrClient.chain.callContractMethod('BooksRegistry', 'getAllBooks', {});
        return response.result; // Assumes the result is an array of book objects
    } catch (error) {
        console.error('Error fetching books:', error);
        return [];
    }
};

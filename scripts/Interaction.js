import "./deploy";

const { Contract } = require("klayr-sdk");
const libraryContract = "LIBRARY_MODEL_ADDRESS";
const BookUtilizationContract = "BOOK_UTILIZATION_ADDRESS";

// usage
// register and borrow a book
async function registerAndBorrowBook() {
    // register new book
    const result = await booksRegistryContract.registerBook(1, "1998", "George Orwell", "123456789");
    console.log(result);

    // borrow the registered book
    const borrowResult = await BookUtilizationContract.borrowBook(1);
    console.log(borrowResult);

    /////////////////////////////////////////////
    ///////// MORE OPERATIONS LATER /////////////
    /////////////////////////////////////////////
}

registerAndBorrowBook();


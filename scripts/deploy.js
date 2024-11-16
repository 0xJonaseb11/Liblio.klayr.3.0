const LibraryModel = require("../contracts/LibraryModel");
const BooksRegistry = require("../contracts/BooksRegistry");
const BookUtilization = require("../contracts/BookUtilization");

// Deploy all contracts
async function deployContracts() {
    const librarymodelContract = new LibraryModel();
    const booksRegistryContract = new BooksRegistry();
    const booksUtilizationContract = new BookUtilization();

    // / Register the contracts to the blockchain(hypothetical deploy function)
    const deployedLibraryModelContract = await deploy(librarymodelContract);
    const deployedBooksRegistryContract = await deploy(booksRegistryContract);
    const deployedBookUtilizationContract =  await deploy(booksUtilizationContract);

    // Log the contract address deployed on Klayr blockchain network
    console.log("LibraryModel contract deployed at: ", deployedLibraryModelContract.address);
    console.log("BooksRegistry contract deployed at: ", deployedBooksRegistryContract.address);
    console.log("BookUtilization contract deployed at: ", deployedBookUtilizationContract.address);
}

deployContracts();
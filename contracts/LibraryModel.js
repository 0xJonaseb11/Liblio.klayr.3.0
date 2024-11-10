class LibraryModel {
    constructor () {
        this.libraryName = "My Library";
        this.libraryAddress = "123 Kigali street";
        this.professionals = {}; // map professional IDs to roles
        this.books = []; // store registered books
    }

    // add professional to library system
    async AddProfessional (id, role) {
        if (this.professionals[id]) {
            return `Professional with ID ${id} already exists`;
        }
        this.professionals[id] = role;
        return `Professional with ID ${id} added as ${role}`;
    }
     
    // getters
    // Get all professionals in the library system

    async getProfessionals () {
        return this.professionals;
    }

    // check if professional has access to manage books
    async hasManagementAccess(id) {
        const role = this.professionals[id];
        return role === "librarian" || role === "admin";

    }

    // Register a book to a library manage't system
    async registerBook (bookId) {
        if (!this.books.includes(bookId)) {
            this.bookId.push(bookId);
            return `Book with ID: ${bookId} iregistered to the library successfuly!!`;
        }
        return `Book with ID: ${bookId} is already registered`;


    }

    // get the library details
    async getLibraryDetails() {
        return {
            name: this.libraryName,
            address: this.libraryAddress
        }
    }

    // Get Book Details

}

module.exports LibraryModel;
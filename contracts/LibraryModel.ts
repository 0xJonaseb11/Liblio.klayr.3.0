type Role = "librarian" | "admin" | "member";

class LibraryModel {
    private libraryName: string = "My Library";
    private libraryAddress: string = "123 Kigali Street";
    private professionals: Record<number, Role> = {};
    private books: number[] = [];

    // Add a professional to the library system
    async addProfessional(id: number, role: Role): Promise<string> {
        if (this.professionals[id]) {
            return `Professional with ID: ${id} already exists.`;
        }
        this.professionals[id] = role;
        return `Professional with ID: ${id} added as ${role}.`;
    }

    // Get all professionals in the library system
    async getProfessionals(): Promise<Record<number, Role>> {
        return this.professionals;
    }

    // Check if a professional has access to manage books
    async hasManagementAccess(id: number): Promise<boolean> {
        const role = this.professionals[id];
        return role === "librarian" || role === "admin";
    }

    // Register a book in the library management system
    async registerBook(bookId: number): Promise<string> {
        if (!this.books.includes(bookId)) {
            this.books.push(bookId);
            return `Book with ID: ${bookId} registered to the library successfully!`;
        }
        return `Book with ID: ${bookId} is already registered.`;
    }

    // Get library details
    async getLibraryDetails(): Promise<{ name: string; address: string }> {
        return {
            name: this.libraryName,
            address: this.libraryAddress,
        };
    }
}

export default LibraryModel;

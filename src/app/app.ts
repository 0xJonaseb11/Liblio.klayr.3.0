// import { Application, Types } from 'klayr-sdk';
// import { registerModules } from './modules';
// import { registerPlugins } from './plugins';

// export const getApplication = (config: Types.PartialApplicationConfig): Application => {
// 	const { app } = Application.defaultApplication(config);

// 	registerModules(app);
// 	registerPlugins(app);

// 	return app;
// };


import { Application, Types } from "klayr-sdk";
import { Contract } from "klayr-sdk";
import { registerModules } from "./modules";
import { registerPlugins } from "./plugins";

// Import contract classes
import LibraryModel from "./contracts/LibraryModel";
import BooksRegistry from "./contracts/BooksRegistry";
import BookUtilization from "./contracts/BookUtilization";
import AccessControl from "./contracts/AccessControl";


// Define contract types
type LibraryContract = typeof LibraryModel;
type BooksRegistryContract = typeof BooksRegistry;
type BookUtilizationContract = typeof BookUtilization;
type AccessControlContract = typeof AccessControl;

export const getApplication  =(config: Types.PartialApplicationConfig) : Application => {
	const { app } = Application.defaultApplication(config);

	// register your module and plugins
	registerModules(app);
	registerPlugins(app);


	// Initialize contracts
	// Assuming contracts are already deployed
	const deployedLiraryModelContract = new Contract<LibraryContract>(app, "LibraryModel");
	const deployedBooksRegistryContract = new Contract<BooksRegistryContract>(app, "BooksRegistry");
	const deployedBookUtilizationContract = new Contract<BookUtilizationContract>(app, "BookUtilization");
	const deployedAccessControlContract = new Contract<AccessControlContract>(app, "AccessControl");

	// Application handlers
	const handlers = {
		// access control handlers
		async assignRoleHandler(userId: string, role: string) {
			const result = await deployedAccessControlContract.assignRole(userId, role);
			console.log(result);
		},
		async checkPermissionHandler(userId: string, requiredRole: string) {
			const result = await deployedAccessControlContract.canAccess(userId, requiredRole);
			console.log(result);
		},

		// Library management handlers
		async registerBookhandler(userId: string, bookId: string, title: string, author: string, isbn: string) {
			const canAccessResult = await deployedAccessControlContract.canAccess(userId, 'librarian');
			if (canAccessResult.includes("not authorized")) {
				return "Permission Denied:: You must be a Librarian or Admin to register books";
			}

			const result = await deployedBooksRegistryContract.registerBook(bookId, title, author, isbn);
			console.log(result);
		},

		
		async updateBookHandler(bookId: string, title: string, author: string, isbn: string) {
			const result = await deployedBooksRegistryContract.updateBook(bookId, title, author, isbn);
			console.log(result);
		},

		// Book borrowinf handlers
		async borrowBookHandler(userId: string, bookId: string) {
			const result = await deployedBookUtilizationContract.borrowBook(bookId);
			console.log(result);
		},
		async returnBookHandler(bookId: string) {
			const result = await deployedBookUtilizationContract.returnBoook(bookId);
			console.log(result);
		},

		// Library details handler
		async getLibraryDetailsHandler() {
			const libraryDetails = await deployedLiraryModelContract.getLibraryDetails();
			console.log(libraryDetails);
		}

	};

	// Export handles
	app.use(handlers);
	return app;

}
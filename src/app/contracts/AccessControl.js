class AccessControl {
    constructor() {
        this.roles = [
            'admin',
            'librarian',
            'member'
        ];
        this.userRoles = {}; // map of user ids to roles

    }

    // Assign a role to user
    async assignRole(userId, role) {

          // Assign roles
    console.log(await accessControlContract.assignRole(1, 'admin')); // User 1 is an admin
    console.log(await accessControlContract.assignRole(2, 'librarian')); // User 2 is a librarian
    console.log(await accessControlContract.assignRole(3, 'member')); // User 3 is a member


        if (!this.roles.includes(role)) {
            return `Invalid role. Available roles are: ${this.roles.join(', ')}`;
        }
        this.userRoles[userId] = role;
        return `Role '${role}' assigned to user with ID: ${userId}`; 
    }

    // Get the role of a user
    async getRole(userId) {
        const role = this.userRoles[userId];
        if (role) {
            return `User with ID: ${userId} has the role: ${role}`;
        }
        return `user with ID: ${userId} does not have a role assigned!`;
    }

    // check if a user has a specific role
    async hasRole(userId, role) {
        const userRole = this.userRoles[userId];
        if(userRole === role) {
            return  `User with ID: ${userId} has the role: ${role} role`;
        }
        return `User with ID: ${userId} doesnot have the '${role}' role`;

    }

    // Restrict function access based on user's role
    async canAccess(userId, requiredRole) {
        const userRole = this.userRoles[userId];
        if (!userRole) {
            return `User with ID: ${userId} does not have any role assigned!`;
        }

        const roleHierarchy = {
            admin: 3,
            librarian: 2,
            member: 1
        };

        if (roleHierarchy[userRole] >= roleHierarchy[requiredRole]) {
            return  `User with ID: ${userId} is authorized to access this function!`;
        } else {
            return `User with ID: ${userId} is not authorized to access this function!`;
        }
    }
}

module.exports =  AccessControl;
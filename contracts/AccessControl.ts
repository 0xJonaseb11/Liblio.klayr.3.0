type Role = 'admin' | 'librarian' | 'member';

class AccessControl {
    private roles: Role[] = ['admin', 'librarian', 'member'];
    private userRoles: Record<number, Role> = {};

    // Assign a role to a user
    async assignRole(userId: number, role: Role): Promise<string> {
        if (!this.roles.includes(role)) {
            return `Invalid role. Available roles are: ${this.roles.join(', ')}`;
        }
        this.userRoles[userId] = role;
        return `Role '${role}' assigned to user with ID: ${userId}`;
    }

    // Get the role of a user
    async getRole(userId: number): Promise<string> {
        const role = this.userRoles[userId];
        if (role) {
            return `User with ID: ${userId} has the role: ${role}`;
        }
        return `User with ID: ${userId} does not have a role assigned!`;
    }

    // Check if a user has a specific role
    async hasRole(userId: number, role: Role): Promise<string> {
        const userRole = this.userRoles[userId];
        if (userRole === role) {
            return `User with ID: ${userId} has the role: '${role}'`;
        }
        return `User with ID: ${userId} does not have the '${role}' role`;
    }

    // Restrict function access based on user's role
    async canAccess(userId: number, requiredRole: Role): Promise<string> {
        const userRole = this.userRoles[userId];
        if (!userRole) {
            return `User with ID: ${userId} does not have any role assigned!`;
        }

        const roleHierarchy: Record<Role, number> = {
            admin: 3,
            librarian: 2,
            member: 1,
        };

        if (roleHierarchy[userRole] >= roleHierarchy[requiredRole]) {
            return `User with ID: ${userId} is authorized to access this function!`;
        }
        return `User with ID: ${userId} is not authorized to access this function!`;
    }
}

export default AccessControl;

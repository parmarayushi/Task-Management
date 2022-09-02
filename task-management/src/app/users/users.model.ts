export class Users {
    public id: number;
    public firstName: string;
    public lastName: string;
    public userRole: number;
    public email: string;
    public password: string;
    public confirmPassword: string;

    constructor(
        id: number,
        firstName: string,
        lastName: string,
        userRole: number,
        email: string,
        password: string,
        confirmPassword: string
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userRole = userRole;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword
    }
}

export class UserRole {
    public id: number;
    public role: string;

    constructor(
        id: number,
        role: string
    ) {
        this.id = id;
        this.role = role;
    }
}
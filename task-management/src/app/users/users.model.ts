export class Users {
    public id: number;
    public firstName: string;
    public lastName: string;
    public city: number;
    public email: string;
    public password: string;
    public confirmPassword: string;

    constructor(
        id: number,
        firstName: string,
        lastName: string,
        city: number,
        email: string,
        password: string,
        confirmPassword: string
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword
    }
}

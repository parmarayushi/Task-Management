export class User {
    public email: string;
    public password: string;

    constructor(
        email: string,
        passwrod: string
    ) {
        this.email = email;
        this.password = passwrod
    }
}
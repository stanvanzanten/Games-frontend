export class User{
    public _id;
    public username: String;
    public password: String;
    public firstname: String;
    public lastname: String;

    constructor(username: string, password: String, firstname: String, lastname: String) {
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
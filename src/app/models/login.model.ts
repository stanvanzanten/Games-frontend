export class Login{
    public _id;
    public username: String;
    public password: String;
    
    constructor(username: string, password: String){
        this.username = username;
        this.password = password;
    }
}
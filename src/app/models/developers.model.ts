import { NumberValueAccessor } from "@angular/forms/src/directives";

export class Developer {
    public _id;
    public name: string;
    public age : number;
    public games : [];

    constructor(name: string, age: number, games: []) {
        this.name = name;
        this.age = age;
        this.games = games;
    }
}
import { NumberValueAccessor } from "@angular/forms/src/directives";
import { Game } from "./games.model";

export class Developer {
    public _id;
    public name: string;
    public age : number;
    public games : Game;

    constructor(name: string, age: number, games: Game) {
        this.name = name;
        this.age = age;
        this.games = games;
    }
}
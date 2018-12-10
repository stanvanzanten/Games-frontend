import { Developer } from "./developers.model";

export class Game {
    public _id;
    public name: string;
    public releaseDate: string;
    public genre: string;
    public description: string;
    public imageUrl: string;
    public developer: Developer;


    constructor(imageUrl: string, name: string, releaseDate: string, genre: string, description: string, developer: Developer) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.genre = genre;
        this.description = description;
        this.imageUrl = imageUrl;
        this.developer = developer;
    }
}
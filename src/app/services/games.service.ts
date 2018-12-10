import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs'; ///Observable
import { Game } from '../models/games.model';
import { Subject } from 'rxjs'; ///Subject;
import { Developer } from '../models/developers.model'

@Injectable()
export class GameService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private serverUrl = environment.serverUrl + '/game'; // URL to web api
    private games: Game[] = [];
    private PostserverUrl = environment.serverUrl; //URL to game post endpoint
    startedEditing = new Subject<number>();
    gamesChanged = new Subject<Game[]>();

    //
    //
    //
    constructor(private http: Http) {
        // this.readGame();
    }

    //
    //
    //
    public getGames(): Promise<Game[]> {
        console.log('Game ophalen van server');
        return this.http.get(this.serverUrl, { headers: this.headers })
            .toPromise()
            .then(response => {
                console.dir(response.json());
                this.games = response.json() as Game[];
                return this.games
            })
            .catch(error => {
                return this.handleError(error);
            });
    }

    public getGame(index: number): Promise<Game> {
        console.log('Game ophalen met id');
        return this.http.get(this.serverUrl + '/' + this.games[index]._id, { headers: this.headers })
            .toPromise()
            .then(response => {
                console.dir(response.json());
                return response.json() as Game;
            })
            .catch(error => {
                return this.handleError(error);
            });
    }

    public updateGames(index: number, newGame: Game) {
        console.log("Game updaten");
        this.http.put(this.serverUrl + "/" + this.games[index]._id, { imageUrl: newGame.imageUrl, name: newGame.name, releaseDate: newGame.releaseDate, genre: newGame.genre, description: newGame.description, developer: newGame.developer })
            .toPromise()
            .then(() => {
                console.log("Game veranderd")
                this.getGames()
                    .then(
                        games => {
                            this.games = games
                            this.gamesChanged.next(this.games.slice());
                        }
                    )
                    .catch(error => console.log(error));
            })
            .catch(error => { return this.handleError(error) });
    }

    public deleteGame(index: number) {
        console.log("Game verwijderen");
        this.http.delete(this.serverUrl + "/" + this.games[index]._id)
            .toPromise()
            .then(() => {
                console.log("game verwijderd")
                this.getGames()
                    .then(
                        games => {
                            this.games = games
                            this.gamesChanged.next(this.games.slice());
                        }
                    )
                    .catch(error => console.log(error));
            })
            .catch(error => { return this.handleError(error) });
    }

    public addGame(games: Game) {
        console.log('game opslaan');
        this.http.post(this.PostserverUrl + '/developer/' + games.developer._id + '/game', { imageUrl: games.imageUrl, name: games.name, releaseDate: games.releaseDate, genre: games.genre, description: games.description, developer: games.developer })
            .toPromise()
            .then(() => {
                console.log("game toegevoegd")
                this.getGames()
                    .then(
                        games => {
                            this.games = games
                            this.gamesChanged.next(this.games.slice());
                        }
                    )
                    .catch(error => console.log(error));
            }
            )
            .catch(error => { return this.handleError(error) });
    }

    //
    //
    //
    private handleError(error: any): Promise<any> {
        console.log('handleError');
        return Promise.reject(error.message || error);
    }

}
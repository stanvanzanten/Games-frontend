import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs'; ///Observable
import { User } from '../models/user.model';
import { Subject } from 'rxjs'; ///Subject

@Injectable()
export class RegisterService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private serverUrl = environment.serverUrl + '/register'; // URL to web api
    private users: User[] = [];
    startedEditing = new Subject<number>();
    usersChanged = new Subject<User[]>();

    constructor(private http: Http) {

    }

    public getUsers(): Promise<User[]>{
        console.log('user ophalen van de server');
        return this.http.get(this.serverUrl,{headers: this.headers })
        .toPromise()
        .then(response => {
            console.dir(response.json());
            this.users = response.json() as User[];
            return this.users
        })
        .catch(error => {
            return this.handleError(error);
        });
    }

    public getUser(index: number): Promise<User> {
        console.log('User ophalen met id');
        return this.http.get(this.serverUrl + '/' + this.users[index]._id, { headers: this.headers })
            .toPromise()
            .then(response => {
                console.dir(response.json());
                return response.json() as User;
            })
            .catch(error => {
                return this.handleError(error);
            });
    }

    // public getGames(): Promise<Game[]> {
    //     console.log('Game ophalen van server');
    //     return this.http.get(this.serverUrl, { headers: this.headers })
    //         .toPromise()
    //         .then(response => {
    //             console.dir(response.json());
    //             this.games = response.json() as Game[];
    //             return this.games
    //         })
    //         .catch(error => {
    //             return this.handleError(error);
    //         });
    // }

    public addUser(users: User){
        console.log('user aanmaken');
        this.http.post(this.serverUrl, {username: users.username, password: users.password, firstname: users.firstname, lastname: users.lastname})
        .toPromise()
        .then(() => {
            console.log("user toegevoegd")
            this.getUsers()
            .then(
                users => {
                    this.users = users
                    this.usersChanged.next(this.users.slice());
                }
            )
            .catch(error => console.log(error));
        })
        .catch(error => {return this.handleError(error)});
    }

    // public addGame(games: Game) {
    //     console.log('games opslaan');
    //     this.http.post(this.serverUrl, { imageUrl: games.imageUrl, name: games.name, releaseDate: games.releaseDate, genre: games.genre, description: games.description })
    //         .toPromise()
    //         .then(() => {
    //             console.log("games toegevoegd")
    //             this.getGames()
    //                 .then(
    //                     games => {
    //                         this.games = games
    //                         this.gamesChanged.next(this.games.slice());
    //                     }
    //                 )
    //                 .catch(error => console.log(error));
    //         })
    //         .catch(error => { return this.handleError(error) });
    // }

    private handleError(error: any): Promise<any> {
        console.log('handleError');
        return Promise.reject(error.message || error);
    }

}
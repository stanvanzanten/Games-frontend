import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs'; ///Observable
import { User } from '../models/user.model';
import { Subject } from 'rxjs'; ///Subject
import { headersToString } from 'selenium-webdriver/http';
import { map } from 'rxjs/operators';


@Injectable()
export class LoginService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private serverUrl = environment.serverUrl + '/login'; // URL to web api
    private users: User[] = [];
    startedEditing = new Subject<number>();
    usersChanged = new Subject<User[]>();

    constructor(private http: Http) {

    }

    public getUsers(): Promise<User[]> {
        console.log('user ophalen van de server');
        return this.http.get(this.serverUrl, { headers: this.headers })
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

    authenticateUser(user){
        let headers = new Headers();
        headers.append('Content-type','application/json');
        return this.http.post(this.serverUrl, user, {headers: this.headers})
        .toPromise()
            .then(response => {
                console.dir(response.json());
                return response.json() as User;
            })
            .catch(error => {
                return this.handleError(error);
            });
    }
    public loginUser(users: User){
        console.log('user inloggen');
        this.http.post(this.serverUrl, {username: users.username, password: users.password})
        .toPromise()
        .then(() => {
            console.log("user ingelogd")
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

    private handleError(error: any): Promise<any> {
        console.log('handleError');
        return Promise.reject(error.message || error);
    }

}
import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs'; ///Observable
import { User } from '../models/user.model';
import { Login } from '../models/login.model';
import { Subject } from 'rxjs'; ///Subject
import { headersToString } from 'selenium-webdriver/http';
import { map, mapTo, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private serverUrl = environment.serverUrl + '/authenticate'; // URL to web api
    private users: User[] = [];
    startedEditing = new Subject<number>();
    usersChanged = new Subject<User[]>();
    public token: String = null

    constructor(private http: Http, private httpClient: HttpClient) {
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

    authenticateUser(user) {
        let headers = new Headers();
        headers.append('Content-type', 'application/json');
        return this.http.post(this.serverUrl, user, { headers: this.headers })
            .toPromise()
            .then(response => {
                console.dir(response.json());
                return response.json() as User;
            })
            .catch(error => {
                return this.handleError(error);
            });
    }

    public loginUser(logins: Login) {
        return this.httpClient.post(this.serverUrl, { username: logins.username, password: logins.password })
            .pipe(tap((logins: any) => {
                    this.token = logins.data.token
                // // login successful if there's a jwt token in the response
                // if (logins && logins.token) {
                //     // store user details and jwt token in local storage to keep user logged in between page refreshes
                //     localStorage.setItem('currentUser', JSON.stringify(logins));
                // }
            }));
    }

    isAuth() {
        return this.token != null
    }

    signOut() {
        this.token = null
    }

    private handleError(error: any): Promise<any> {
        console.log('handleError');
        return Promise.reject(error.message || error);
    }

}
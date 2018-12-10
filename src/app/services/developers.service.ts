import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs'; ///Observable
import { Developer } from '../models/developers.model';
import { Subject } from 'rxjs'; ///Subject

@Injectable()
export class DeveloperService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private serverUrl = environment.serverUrl + '/developer'; // URL to web api
    private developers: Developer[] = [];
    startedEditing = new Subject<number>();
    developersChanged = new Subject<Developer[]>();

    //
    //
    //
    constructor(private http: Http) {
        // this.readDeveloper();
    }

    //
    //
    //
    public getDevelopers(): Promise<Developer[]> {
        console.log('Developer ophalen van server');
        return this.http.get(this.serverUrl, { headers: this.headers })
            .toPromise()
            .then(response => {
                console.dir(response.json());
                this.developers = response.json() as Developer[];
                return this.developers
            })
            .catch(error => {
                return this.handleError(error);
            });
    }

    public getDeveloper(index: number): Promise<Developer> {
        console.log('Developer ophalen met id');
        return this.http.get(this.serverUrl + '/' + this.developers[index]._id, { headers: this.headers })
            .toPromise()
            .then(response => {
                console.dir(response.json());
                return response.json() as Developer;
            })
            .catch(error => {
                return this.handleError(error);
            });
    }

    public updateDevelopers(index: number, newDeveloper : Developer){
        console.log("Developer updaten");
        this.http.put(this.serverUrl + "/" + this.developers[index]._id, { name: newDeveloper.name, age: newDeveloper.age, games: newDeveloper.games})
          .toPromise()
          .then( () => {
            console.log("Developer veranderd")
            this.getDevelopers()
            .then(
              developers => {
                this.developers = developers
                this.developersChanged.next(this.developers.slice());
              }
            )
            .catch(error => console.log(error));
          })
          .catch( error => { return this.handleError(error) } );
      }

    public deleteDeveloper(index: number) {
        console.log("Developer verwijderen");
        this.http.delete(this.serverUrl + "/" + this.developers[index]._id)
            .toPromise()
            .then(() => {
                console.log("developers verwijderd")
                this.getDevelopers()
                    .then(
                        developers => {
                            this.developers = developers
                            this.developersChanged.next(this.developers.slice());
                        }
                    )
                    .catch(error => console.log(error));
            })
            .catch(error => { return this.handleError(error) });
    }

    public addDeveloper(developers: Developer) {
        console.log('developers opslaan');
        this.http.post(this.serverUrl, {name: developers.name, age: developers.age, games: developers.games})
            .toPromise()
            .then(() => {
                console.log("developers toegevoegd")
                this.getDevelopers()
                    .then(
                        developers => {
                            this.developers = developers
                            this.developersChanged.next(this.developers.slice());
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